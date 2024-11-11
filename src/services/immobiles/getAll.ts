import { apiFront } from "../api";

export const getAllImmobiles = async (data?: {
    take: number;
    skip: number;
    search?: string;
    filter?: string;
}) => {
    try {
        let urlApi = "/api/immobiles";
        const params: Record<string, string | number | undefined> = { ...data };
        const urlSearch = new URLSearchParams(params as Record<string, string>).toString();

        if (data) urlApi += `?${urlSearch}`;

        const res = await apiFront.get(urlApi);

        return Promise.resolve(res.data);
    } catch (error) {
        return Promise.reject(error);
    }
};
