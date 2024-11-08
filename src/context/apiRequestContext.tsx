'use client';
import { apiFront } from '@/services/api';
import { AxiosError, AxiosResponse } from 'axios';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { getCookie } from 'cookies-next';
import { useJwt } from 'react-jwt';

interface IApiRequestContext {
    apiRequest: (
        method: 'put' | 'post' | 'get' | 'delete' | 'patch',
        url: string,
        options?: {
            data?: any;
            params?: any;
            isUpload?: boolean;
        },
    ) => Promise<AxiosResponse<any, any>>;
}

interface IProps {
    children: ReactNode;
}

const ApiRequestContext = createContext<IApiRequestContext>(
    {} as IApiRequestContext,
);

const ApiRequestProvider: React.FC<IProps> = ({ children }) => {
    const token = getCookie('token') as string;
    const { isExpired } = useJwt(token);

    const apiRequest = async (
        method: 'put' | 'post' | 'get' | 'delete' | 'patch',
        url: string,
        options?: {
            data?: any;
            params?: any;
            isUpload?: boolean;
        },
    ) => {
        let urlApi = url;
        const headers = {
            'Content-Type': options?.isUpload ? 'multipart/form-data' : 'application/json',
            Authorization: `Bearer ${token}`,
        };

        const params = { ...options?.params };
        const urlSearch = new URLSearchParams(params).toString();

        if (options?.params) urlApi += `?${urlSearch}`;

        try {
            const response = await apiFront[method](
                urlApi,
                {
                    data: options?.data,
                },
                {
                    headers: { ...headers },
                },
            );

            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status == 401) {
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
