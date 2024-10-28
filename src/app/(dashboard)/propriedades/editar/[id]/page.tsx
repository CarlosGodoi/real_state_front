import { PropertyEditForm } from "../components";

interface IParams {
    params: {
        id: string;
    };
}

export default function EditPropertyData({ params }: IParams) {
    return (
        <div className="w-full flex flex-col bg-gray_08">
            <h2 className="text-secondary text-3xl font-semibold px-16 py-10">Editar dados do imóvel</h2>
            <PropertyEditForm imovelId={params.id} />
        </div>
    )
}