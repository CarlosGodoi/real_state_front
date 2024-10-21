import { apiFront } from "../api";
import { getCookie } from "cookies-next";
import api from "../api";
import { isAxiosError } from "axios";

interface IAddress {
    rua: string;
    bairro: string;
    cidade: string;
    numero: number | null;
    cep: string;
}

interface ICreateImmobile {
    quantidadeQuartos: number | null;
    quantidadeBanheiros: number | null;
    area: number | null;
    preco: number | null;
    tipoContrato: string;
    tipoImovel: string;
    status: string;
    endereco: IAddress;
    images?: File[];
}

export const registerImmobile = async (data: ICreateImmobile) => {
    try {
        const { images, ...otherData } = data;

        const parseData = {
            ...otherData,
            images: images ? images.map((img) => img.name) : [],
        };

        const response = await apiFront.post("/api/immobiles", parseData);

        if (images && images.length) {
            const id = response.data.id as string;
            console.log('ID =>', id);

            const formData = new FormData();

            images.forEach((el) => {
                formData.append("files", el);
                console.log('FormData contém:', Array.from(formData.entries()));
            });

            return await api.post(`imovel/images/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${getCookie("token")?.toString()}`,
                    "Content-Type": "multipart/form-data",
                },
            });
        }

        return response;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log("Erro de resposta:", error.response?.data);
            console.log("Status:", error.response?.status);
            console.log("Headers:", error.response?.headers);
            console.log("Erro de resposta:", error.response?.data);
        }
        return Promise.reject(error);
    }
};
