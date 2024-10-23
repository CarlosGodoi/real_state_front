import apiFront from "../api";

interface IRgisterBroker {
    nome: string;
    email: string;
    telefone: string;
    perfil: string;
    senha: string;
}

export const registerUsers = async (data: IRgisterBroker) => {
    try {
        return await apiFront.post("/users", { ...data });
    } catch (error) {
        Promise.reject(error);
    }
};