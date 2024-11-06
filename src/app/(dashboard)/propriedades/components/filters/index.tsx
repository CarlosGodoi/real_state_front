'use client'
import SelectDefault from "@/components/selectDefault"
import { useImmobilesContext } from "@/context/immobilesContext";
import IconWrapper from "@/utils/icons/icons"
import { locations } from "@/utils/selectOptions/location";
import { priceMaxOptions } from "@/utils/selectOptions/priceMax";
import { priceMinOptions } from "@/utils/selectOptions/priceMin";
import { typeContracts } from "@/utils/selectOptions/typeContract";
import { typeImmobiles } from "@/utils/selectOptions/typeImmobile";

export const Filters = () => {
    const { handleFilterChange } = useImmobilesContext();

    const onFilterChange = (field: string, value: string) => {
        console.log('Filtro atualizado:', field, '=>', value);

        handleFilterChange({ [field]: value });
    };
    return (
        <div className="w-[60%] grid grid-cols-5 bg-gray_20 p-3 rounded-lg mt-9 gap-3 mobile_1:grid-cols-1 mobile_1:mt-36 mobile_1:w-full notebook_13p:w-4/5 laptop:w-[95%]">
            <SelectDefault
                options={locations}
                leftIcon={<IconWrapper iconName="mapPin" />}
                placeholder="Localização"
                onChange={(value) => onFilterChange("localizacao", value)}
            />
            <SelectDefault
                options={typeImmobiles}
                leftIcon={<IconWrapper iconName="house" />}
                placeholder="Tipo Imóvel"
                onChange={(value) => onFilterChange("tipoImovel", value)}
            />
            <SelectDefault options={priceMinOptions}
                leftIcon={<IconWrapper iconName="money" />}
                placeholder="Preço Min."
                onChange={(value) => onFilterChange("precoMin", value)}
            />
            <SelectDefault options={priceMaxOptions}
                leftIcon={<IconWrapper iconName="money" />}
                placeholder="Preço Max."
                onChange={(value) => onFilterChange("precoMax", value)}
            />
            <SelectDefault options={typeContracts}
                leftIcon={<IconWrapper iconName="files" />}
                placeholder="Tipo contrato"
                onChange={(value) => onFilterChange("tipoContrato", value)}
            />
        </div>
    )
}