import api from "@/services/api";
import { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
    params: {
        id: string;
    };
}

export async function GET(req: NextRequest, { params }: IParams) {
    const token = req.cookies.get("token")?.value;

    try {
        const response = await api.get(`/imovel/${params.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const result = NextResponse.json(
            {
                ...response.data,
            },
            {
                status: 200,
            }
        );

        return result;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log("response =>", error);
            return NextResponse.json(
                { error: error.response?.data.error },
                { status: error.response?.status }
            );
        }
    }
}

export async function PUT(req: NextRequest, { params }: IParams) {
    const data = await req.json();
    const token = req.cookies.get("token")?.value;

    try {
        const response = await api.put(
            `/imovel/${params.id}`,
            {
                preco: data.preco,
                tipoContrato: data.tipoContrato,
                status: data.status,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const result = NextResponse.json(
            {
                ...response.data,
            },
            {
                status: 200,
            }
        );

        return result;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log("response =>", error);
            return NextResponse.json(
                { error: error.response?.data.error },
                { status: error.response?.status }
            );
        }
    }
}

export async function DELETE(req: NextRequest, { params }: IParams) {
    const token = req.cookies.get("token")?.value;

    try {
        await api.delete(`/imovel/${params.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const result = NextResponse.json({
            status: 200,
        });

        return result;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log("response =>", error);
            return NextResponse.json(
                { error: error.response?.data.error },
                { status: error.response?.status }
            );
        }
    }
}
