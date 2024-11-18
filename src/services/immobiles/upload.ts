import { getCookie } from "cookies-next";
import api from "../api";

export const uploadImages = async (imovelId: string, images: File[]) => {
    const formData = new FormData();
    images.forEach((image) => formData.append("files", image));

    try {
        const uploadResponse = await api.post(`/imovel/images/${imovelId}`, formData, {
            headers: {
                Authorization: `Bearer ${getCookie("token")?.toString()}`,
                "Content-Type": "multipart/form-data",
            },
        });

        return uploadResponse;
    } catch (error) {
        console.error("Erro ao fazer upload das imagens:", error);
        return Promise.reject(error);
    }
};
