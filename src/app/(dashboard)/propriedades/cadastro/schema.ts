import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const immobileSchema = z
    .object({
        quantidadeQuartos: z.number().nullable(),
        quantidadeBanheiros: z.number().nullable(),
        area: z.number().nullable(),
        preco: z.number().nullable(),
        tipoContrato: z.enum(["VENDA", "ALUGUEL"]),
        tipoImovel: z.enum(["CASA", "APARTAMENTO"]),
        status: z.enum(["NEGOCIACAO", "VENDIDO", "ALUGADO", "PENDENTE"]),
        endereco: z.object({
            rua: z.string().trim().min(1, { message: "Rua é obrigatório." }),
            bairro: z.string().trim().min(1, { message: "Rua é obrigatório." }),
            cidade: z.string().trim().min(1, { message: "Rua é obrigatório." }),
            numero: z.number().nullable(),
            cep: z.string(),
        }),
    })
    .required();

export const resolver = zodResolver(immobileSchema);

export type FormData = z.infer<typeof immobileSchema>;

export const defaultValues: FormData = {
    quantidadeQuartos: null,
    quantidadeBanheiros: null,
    area: null,
    preco: null,
    tipoContrato: "ALUGUEL",
    tipoImovel: "CASA",
    status: "PENDENTE",
    endereco: {
        rua: "",
        bairro: "",
        cidade: "",
        numero: null,
        cep: "",
    },
};
