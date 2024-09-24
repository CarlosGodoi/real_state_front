import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button, DropdownMenu, Flex } from "@radix-ui/themes";

export const MoboMenu = () => {
    return (
        <Flex gap="3" align="center">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button variant="classic">
                        <HamburgerMenuIcon width={30} height={30} color="#fff" />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content variant="solid" className='px-5 py-5 bg-gray_10 border border-gray_30 rounded-md'>
                    <DropdownMenu.Item className='w-full text-secondary font-medium hover:bg-gray_20 rounded-md mb-2'>Home</DropdownMenu.Item>
                    <DropdownMenu.Item className='w-full text-secondary font-medium hover:bg-gray_20 rounded-md mb-2'>Perfil</DropdownMenu.Item>
                    <DropdownMenu.Item className='text-secondary font-medium hover:bg-gray_20 rounded-md mb-2'>Sobre-nós</DropdownMenu.Item>

                    <DropdownMenu.Separator className='bg-gray_30 h-[1px] w-full' />

                    <DropdownMenu.Item className='text-secondary font-medium hover:bg-gray_20 rounded-md mt-2 mb-2'>Serviços</DropdownMenu.Item>
                    <DropdownMenu.Item className='text-secondary font-medium hover:bg-gray_20 rounded-md mt-2 mb-2'>Contate-nos</DropdownMenu.Item>

                    <DropdownMenu.Separator className='bg-gray_30 h-[1px] w-full' />

                    <DropdownMenu.Item className='text-red-300 font-medium hover:bg-red-500 hover:text-white rounded-md mt-2'>
                        Sair
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </Flex>
    )
}
