import SelectDefault from "@/components/selectDefault";
import { SearchProperty } from "./components/searchProperty";
import IconWrapper from "@/utils/icons/icons";

export default function Property() {
    return (
        <main className="w-full min-h-full flex flex-col gap-3 bg-gray_08">
            <div className="relative w-full h-[400px] flex items-center bg-gradient-to-r from-gray_15 to-gray_08 px-16 mobile_1:h-full mobile_1:static mobile_1:py-4">
                <div className="w-[90%] flex flex-col gap-6">
                    <h2 className="text-5xl text-secondary font-semibold">Encontre o imóvel dos seus sonhos</h2>
                    <span className="text-lg text-gray_60 font-medium">
                        Bem-vindo ao Estatein, onde a propriedade dos seus sonhos o espera em todos os cantos do nosso lindo mundo.
                        Explore nossa seleção selecionada de propriedades, cada uma oferecendo uma história única e uma chance de redefinir sua vida.
                        Com categorias adequadas a todos os sonhadores, sua jornada
                    </span>
                </div>
            </div>
            <section className="w-full flex flex-col items-center gap-3 mobile_1:px-2">

                <SearchProperty />

                <div className="w-[60%] grid grid-cols-5 bg-gray_15 p-3 rounded-lg mt-8 gap-3 mobile_1:grid-cols-1 mobile_1:mt-36 mobile_1:w-full ">
                    <SelectDefault
                        options={[
                            { value: '1', label: 'Option 1' },
                            { value: '2', label: 'Option 2' },
                        ]}
                        leftIcon={<IconWrapper iconName="mapPin" />}
                        placeholder="Localização"
                    />
                    <SelectDefault
                        options={[
                            { value: '1', label: 'Option 1' },
                            { value: '2', label: 'Option 2' },
                        ]}
                        leftIcon={<IconWrapper iconName="house" />}
                        placeholder="Tipo Imóvel"
                    />
                    <SelectDefault options={[
                        { value: '1', label: 'Option 1' },
                        { value: '2', label: 'Option 2' },
                    ]}
                        leftIcon={<IconWrapper iconName="money" />}
                        placeholder="Preço Max."
                    />
                    <SelectDefault options={[
                        { value: '1', label: 'Option 1' },
                        { value: '2', label: 'Option 2' },
                    ]}
                        leftIcon={<IconWrapper iconName="money" />}
                        placeholder="Preço Min."
                    />
                    <SelectDefault options={[
                        { value: '1', label: 'Option 1' },
                        { value: '2', label: 'Option 2' },
                    ]}
                        leftIcon={<IconWrapper iconName="files" />}
                        placeholder="Tipo contrato"
                    />
                </div>
            </section>
        </main>
    );
}
