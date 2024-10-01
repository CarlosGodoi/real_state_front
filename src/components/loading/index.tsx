import { Flex, Spinner } from "@radix-ui/themes"

export const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Spinner className="text-secondary w-6 h-24" />
        </div>
    )
}