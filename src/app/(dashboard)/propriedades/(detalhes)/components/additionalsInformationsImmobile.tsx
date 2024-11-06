import { Lightning } from "@phosphor-icons/react"

const AdditionalsInformationsImmobile = () => {
    const additionalsInformations = [
        {
            id: 1,
            content: 'Amplo terraço à beira-mar para entretenimento.'
        },
        {
            id: 2,
            content: 'Cozinha gourmet com eletros de última geração'
        },
        {
            id: 3,
            content: 'Acesso privado à praia e vistas do pôr do sol'
        },
        {
            id: 4,
            content: 'Suíte master com banheiro inspirado em spa'
        },
        {
            id: 5,
            content: 'Garagem privada e amplo espaço de arrumação'
        },
    ]


    return (
        <div className="w-[48%] h-fit flex flex-col gap-2 p-7 border border-gray_15 rounded-lg mobile_1:w-full mobile_1:p-4 mobile_1:mt-4">
            <h2 className="text-secondary text-2xl font-semibold mb-6">Principais recursos e comodidades</h2>

            {additionalsInformations.map((data) => {
                return (
                    <div key={data.id} className="w-full min-h-16 h-auto flex items-center gap-2 border-l-2 border-purple_60 bg-gradient-to-r from-gray_15 to-gray_08 p-2 mb-4">

                        <Lightning size={30} color="#fff" weight="fill" />
                        <span className="text-gray_60 text-lg font-medium mobile_1:text-base">{data.content}</span>
                    </div>
                )
            })}

        </div>
    )
}

export default AdditionalsInformationsImmobile