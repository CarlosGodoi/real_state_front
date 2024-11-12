import { useAuthContext } from '@/context/authContext';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button, DropdownMenu, Flex } from "@radix-ui/themes";
import Link from 'next/link';

export const MoboMenu = () => {
    const { signOut } = useAuthContext();
    return (
        <Flex gap="3" align="center">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button variant="classic">
                        <HamburgerMenuIcon width={30} height={30} color="#fff" />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content variant="solid" className='px-5 py-5 bg-gray_10 border border-gray_30 rounded-md'>
                    <DropdownMenu.Item className='w-full text-secondary font-medium hover:bg-gray_20 rounded-md mb-2'>
                        <Link href='/home' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Home</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='text-secondary font-medium hover:bg-gray_20 rounded-md mb-2'>
                        <Link href='/sobre-nos' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Sobre nós</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='w-full text-secondary font-medium hover:bg-gray_20 rounded-md mb-2'>
                        <Link href='/corretor/cadastro' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Cadastrar usuários</Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className='bg-gray_30 h-[1px] w-full' />

                    <DropdownMenu.Item className='text-secondary font-medium hover:bg-gray_20 rounded-md mt-2'>
                        <Link href='/propriedades' className="block  text-secondary text-lg font-medium hover:bg-gray_20">Propriedades</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='text-secondary font-medium hover:bg-gray_20 rounded-md mt-2 mb-2'>
                        <Link href='/propriedades/cadastro' className="block text-secondary text-lg font-medium hover:bg-gray_20">Cadastro de propriedade</Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className='bg-gray_30 h-[1px] w-full' />

                    <DropdownMenu.Item className='text-secondary font-medium hover:bg-gray_20 rounded-md mt-2 mb-2'>
                        <Link href='/servicos' className="text-secondary text-lg font-medium hover:border-b-2 border-purple_60">Serviços</Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className='text-purple_60 text-lg font-medium hover:bg-purple_65 hover:text-white rounded-md mt-2' onClick={signOut}>
                        Sair
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </Flex>
    )
}
