"use client";
import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { getAllImmobiles } from "@/services/immobiles/getAll";
import { IImmobiles } from "@/interfaces/getImmobiles";

interface IFilter {
    localizacao: string;
    tipoImovel: string;
    precoMax: string;
    precoMin: string;
    tipoContrato: string;
    search: string;
}

interface IImmobilesContext {
    immobiles: IImmobiles[];
    filter: IFilter;
    loading: boolean;
    error: string | null;
    handleSearch: (value: string) => void;
    handleFilterChange: (newFilter: Partial<IFilter>) => void;
    searchImmobiles: () => void;
    setImmobiles: React.Dispatch<React.SetStateAction<IImmobiles[]>>;
}

export const ImmobilesContext = createContext<IImmobilesContext>(
    {} as IImmobilesContext
);

interface IProps {
    children: ReactNode;
}

export const ImmobilesProvider: React.FC<IProps> = ({ children }) => {
    const [immobiles, setImmobiles] = useState<IImmobiles[]>([]);

    const [filteredImmobiles, setFilteredImmobiles] = useState<IImmobiles[]>([]);
    const [filter, setFilter] = useState<IFilter>({
        localizacao: "",
        tipoImovel: "",
        precoMax: "",
        precoMin: "",
        tipoContrato: "",
        search: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchImmobiles = async (currentFilter: IFilter) => {
        setLoading(true);
        setError(null);
        try {
            const res = await getAllImmobiles({ ...currentFilter, take: 10, skip: 0 });
            if (res) {
                setImmobiles(res.imoveis);
                setFilteredImmobiles(res.imoveis);
            }
        } catch (err) {
            setError("Erro ao buscar imóveis.");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchImmobiles(filter);
    }, []);

    const searchImmobiles = useCallback(() => {
        const precoMax = filter.precoMax ? parseFloat(filter.precoMax) * 1000 : null;
        const precoMin = filter.precoMin ? parseFloat(filter.precoMin) * 1000 : null;

        const filtered = immobiles.filter((imovel) => {

            const matchesSearch = filter.search
                ? imovel.endereco.bairro.toLowerCase().includes(filter.search.toLowerCase())
                : true;

            const matchesLocalizacao = filter.localizacao
                ? imovel.endereco.bairro.toLowerCase().replace(/\s+/g, '-') === filter.localizacao.toLowerCase()
                : true;

            const matchesTipoImovel = filter.tipoImovel
                ? imovel.tipoImovel.toLowerCase() === filter.tipoImovel.toLowerCase()
                : true;

            const matchesPrecoMax = precoMax !== null
                ? imovel.preco <= precoMax
                : true;

            const matchesPrecoMin = precoMin !== null
                ? imovel.preco >= precoMin
                : true;

            const matchesTipoContrato = filter.tipoContrato
                ? imovel.tipoContrato.toLowerCase() === filter.tipoContrato.toLowerCase()
                : true;

            const isMatch = matchesSearch && matchesLocalizacao && matchesTipoImovel &&
                matchesPrecoMax && matchesPrecoMin && matchesTipoContrato;

            return isMatch;
        });

        setFilteredImmobiles(filtered);
    }, [filter, immobiles]);

    useEffect(() => {
        searchImmobiles();
    }, [searchImmobiles]);

    const handleSearch = (value: string) => {
        setFilter((prev) => ({ ...prev, search: value }));
    };

    const handleFilterChange = (newFilter: Partial<IFilter>) => {
        setFilter((prev) => ({ ...prev, ...newFilter }));
    };

    return (
        <ImmobilesContext.Provider
            value={{
                immobiles: filteredImmobiles,
                filter,
                loading,
                error,
                handleSearch,
                handleFilterChange,
                searchImmobiles,
                setImmobiles
            }}>
            {children}
        </ImmobilesContext.Provider>
    );
};

export function useImmobilesContext(): IImmobilesContext {
    const context = useContext(ImmobilesContext);
    if (!context) {
        throw new Error(
            "useImmobilesContext deve ser usado dentro de um ImmobilesProvider"
        );
    }
    return context;
}
