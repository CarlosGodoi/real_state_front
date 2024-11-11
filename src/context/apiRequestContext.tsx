'use client';
import { apiFront } from '@/services/api';
import { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import React, { ReactNode, createContext, useContext } from 'react';
import { getCookie } from 'cookies-next';

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
    const token = getCookie('token') as string;

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
                    // Tratamento de erro de autenticação
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
