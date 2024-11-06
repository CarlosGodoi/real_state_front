import { getCookie } from "cookies-next";
import api from "../api";

interface IUploadImage {
    images: File[];
}

export const uploadImages = async (imovelId: string, images: File[]) => {
    const formData = new FormData();
    images.forEach((image) => formData.append("files", image));

    try {
        return await api.post(`/imovel/images/${imovelId}`, formData, {
            headers: {
                Authorization: `Bearer ${getCookie("token")?.toString()}`,
                "Content-Type": "multipart/form-data",
            },
        });
    } catch (error) {
        console.error("Erro ao fazer upload das imagens:", error);
        return Promise.reject(error);
    }
};
