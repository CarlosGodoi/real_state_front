import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const immobileSchema = z
    .object({
        quantidadeQuartos: z.number().nullable(),
        quantidadeBanheiros: z.number().nullable(),
        area: z.union([z.string(), z.number()]).transform((val) => val === "" ? null : Number(val)).nullable(),
        preco: z.number().nullable(),
        tipoContrato: z.string(),
        tipoImovel: z.string(),
        status: z.string(),
        endereco: z.object({
            rua: z.string().trim().min(1, { message: "Rua é obrigatório." }),
            bairro: z.string().trim().min(1, { message: "Bairro é obrigatório." }),
            cidade: z.string().trim().min(1, { message: "Cidade é obrigatória." }),
            numero: z.union([z.string(), z.number()]).transform((val) => val === "" ? null : Number(val)).nullable(),
            cep: z.string().min(1, { message: "CEP é obrigatório." }),
        }),
        images: z.array(z.string()).optional(),
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
    images: []
};
