import { apiFront } from "../api";

interface ILogin {
    email: string;
    senha: string;
}

export const login = async (data: ILogin) => {
    console.log('login ->', login);

    try {
        return await apiFront.post("/api/login", { ...data });
    } catch (error) {
        Promise.reject(error);
    }
};
