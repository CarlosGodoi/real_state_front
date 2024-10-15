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

    const fetchImmobiles = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getAllImmobiles();
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
        fetchImmobiles();
    }, []);

    const searchImmobiles = useCallback(() => {
        console.log('Executando searchImmobiles');
        console.log('Filtro atual:', filter);
        console.log('Imóveis totais:', immobiles.length);

        const filtered = immobiles.filter((imovel) => {
            console.log('Analisando imóvel:', imovel);

            const matchesSearch = filter.search
                ? imovel.endereco.bairro.toLowerCase().includes(filter.search.toLowerCase())
                : true;
            console.log('matchesSearch:', matchesSearch);

            const matchesLocalizacao = filter.localizacao
                ? imovel.endereco.bairro.toLowerCase() === filter.localizacao.toLowerCase()
                : true;
            console.log('matchesLocalizacao:', matchesLocalizacao);

            const matchesTipoImovel = filter.tipoImovel
                ? imovel.tipoImovel.toLowerCase() === filter.tipoImovel.toLowerCase()
                : true;
            console.log('matchesTipoImovel:', matchesTipoImovel);

            const matchesPrecoMax = filter.precoMax
                ? imovel.preco <= parseFloat(filter.precoMax)
                : true;
            console.log('matchesPrecoMax:', matchesPrecoMax);

            const matchesPrecoMin = filter.precoMin
                ? imovel.preco >= parseFloat(filter.precoMin)
                : true;
            console.log('matchesPrecoMin:', matchesPrecoMin);

            const matchesTipoContrato = filter.tipoContrato
                ? imovel.tipoContrato.toLowerCase() === filter.tipoContrato.toLowerCase()
                : true;
            console.log('matchesTipoContrato:', matchesTipoContrato);

            const isMatch = matchesSearch && matchesLocalizacao && matchesTipoImovel &&
                matchesPrecoMax && matchesPrecoMin && matchesTipoContrato;
            console.log('Imóvel corresponde aos filtros:', isMatch);

            return isMatch;
        });

        console.log('Imóveis filtrados:', filtered.length);
        console.log('Imóveis filtrados detalhes:', filtered);
        setFilteredImmobiles(filtered);
    }, [filter, immobiles]);

    useEffect(() => {
        searchImmobiles();
    }, [searchImmobiles]);

    const handleSearch = (value: string) => {
        setFilter((prev) => ({ ...prev, search: value }));
    };

    const handleFilterChange = (newFilter: Partial<IFilter>) => {
        console.log('Novo filtro:', newFilter);
        setFilter((prev) => ({ ...prev, ...newFilter }));
    };

    console.log('Renderizando Provider');
    console.log('filter =>', filter);
    console.log('immobiles =>', immobiles);
    console.log('filteredImmobiles =>', filteredImmobiles);

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
