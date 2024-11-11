'use client';
import { apiFront } from '@/services/api';
import { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import React, { ReactNode, createContext, useContext } from 'react';
import { getCookie, setCookie } from 'cookies-next';

interface ApiRequestOptions<T = unknown> {
    data?: T;
    params?: Record<string, string | number>;
    isUpload?: boolean;
}

interface IApiRequestContext {
    apiRequest: <T = unknown>(
        method: 'put' | 'post' | 'get' | 'delete' | 'patch',
        url: string,
        options?: ApiRequestOptions<T>
    ) => Promise<AxiosResponse<T>>;
}

interface IProps {
    children: ReactNode;
}

const ApiRequestContext = createContext<IApiRequestContext>({} as IApiRequestContext);

const ApiRequestProvider: React.FC<IProps> = ({ children }) => {
    let token = getCookie('token') as string;

    const apiRequest = async <T = unknown>(
        method: 'put' | 'post' | 'get' | 'delete' | 'patch',
        url: string,
        options?: ApiRequestOptions<T>
    ): Promise<AxiosResponse<T>> => {
        let urlApi = url;
        const headers = {
            'Content-Type': options?.isUpload ? 'multipart/form-data' : 'application/json',
            Authorization: `Bearer ${token}`,
        };

        const params = { ...options?.params };
        const urlSearch = new URLSearchParams(params as Record<string, string>).toString();

        if (options?.params) urlApi += `?${urlSearch}`;

        const config: AxiosRequestConfig = {
            headers,
            params,
            data: options?.data,
        };

        try {
            const response = await apiFront[method](urlApi, config);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 401) {

                    const refreshToken = getCookie('refresh') as string;
                    const refreshResponse = await apiFront.post('/token/refresh', { refreshToken });

                    // Atualiza o token nos cookies e no contexto
                    setCookie('token', refreshResponse.data.token);
                    token = refreshResponse.data.token;
                    console.log('token-atualizado =>', token);


                    // Tente a requisição original novamente com o novo token
                    const newConfig: AxiosRequestConfig = {
                        headers: {
                            ...config.headers,
                            Authorization: `Bearer ${token}`,
                        },
                        params: config.params,
                        data: config.data,
                    };
                    const newResponse = await apiFront[method](urlApi, newConfig);
                    return newResponse;
                } else {
                    // Outros erros
                    return Promise.reject(error);
                }
            }

            return Promise.reject(error);
        }
    };

    return (
        <ApiRequestContext.Provider value={{ apiRequest }}>
            {children}
        </ApiRequestContext.Provider>
    );
};

function useRequest(): IApiRequestContext {
    const context = useContext(ApiRequestContext);
    return context;
}

export { ApiRequestProvider, useRequest };
