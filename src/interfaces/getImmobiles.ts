
import { StatusImovel, TipoContrato, TipoImovel } from "@/enums/selectEnum";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IAddress {
    rua: string;
    bairro: string;
    cidade: string;
    numero: number;
    cep: string;
}

interface IImage {
    id: string;
    path: string | StaticImport;
}

interface IImmobiles {
    id: string;
    tipoContrato: TipoContrato;
    tipoImovel: TipoImovel;
    quantidadeQuartos: number;
    quantidadeBanheiros: number;
    area: number;
    preco: number;
    status: StatusImovel;
    createdAt: Date;
    endereco: IAddress;
    ImageImovel: IImage[];
}

export type { IImmobiles };

interface IImmobile {
    id: string;
    tipoContrato: TipoContrato;
    tipoImovel: TipoImovel;
    quantidadeQuartos: number;
    quantidadeBanheiros: number;
    area: number;
    preco: number;
    status: StatusImovel;
    createdAt: Date;
    endereco: IAddress;
    ImageImovel: IImage[];
}

export type { IImmobile };
