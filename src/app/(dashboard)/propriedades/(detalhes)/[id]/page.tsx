import PropertyDetails from "../components/detailsProperty";

interface IParams {
    params: {
        id: string;
    };
}


export default function DetailingImmobiles({ params }: IParams) {

    return (
        <div className="w-full flex flex-col bg-gray_08">
            <h2 className="text-secondary text-3xl font-semibold px-16 py-10 mobile_1:px-4 mobile_1:text-center mobile-w-full">Detalhes do imóvel</h2>
            <PropertyDetails imovelId={params.id} />
        </div>
    )
}