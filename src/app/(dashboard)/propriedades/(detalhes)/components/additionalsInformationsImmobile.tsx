import { Lightning } from "@phosphor-icons/react"

const AdditionalsInformationsImmobile = () => {
    const additionalsInformations = [
        {
            id: 1,
            content: 'Amplo terraço à beira-mar para entretenimento ao ar livre'
        },
        {
            id: 2,
            content: 'Cozinha gourmet com eletrodomésticos de última geração'
        },
        {
            id: 3,
            content: 'Acesso privado à praia para passeios matinais e vistas do pôr do sol'
        },
        {
            id: 4,
            content: 'Suíte master com banheiro inspirado em spa e varanda voltada para o mar'
        },
        {
            id: 5,
            content: 'Garagem privada e amplo espaço de arrumação'
        },
    ]
    return (
        <div className="w-[48%] h-fit flex flex-col gap-2 p-7 border border-gray_15 rounded-lg">
            <h2 className="text-secondary text-2xl font-semibold mb-6">Principais recursos e comodidades</h2>

            {additionalsInformations.map((data) => {
                return (
                    <div key={data.id} className="w-full h-16 flex items-center gap-2 border-l-2 border-purple_60 bg-gradient-to-r from-gray_15 to-gray_08 p-2 mb-4">

                        <Lightning size={25} color="#fff" weight="fill" />
                        <span className="text-gray_60 text-lg font-medium">{data.content}</span>
                    </div>
                )
            })}

        </div>
    )
}

export default AdditionalsInformationsImmobile