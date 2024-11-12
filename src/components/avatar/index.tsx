'use client'
import React, { useEffect, useState } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { ROLE } from "@/enums/profile";

type TUser = {
    id: string;
    nome: string;
    email: string;
    perfil: ROLE;
};
interface UserAvatarProps {
    user: TUser | null;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        if (user && user.nome) {
            console.log('user =>', user);

            setUserName(user.nome);
        }
    }, [user]);
    return (
        < div className="flex items-center gap-3" >
            <Avatar.Root className="inline-flex items-center justify-center overflow-hidden select-none w-11 h-11 rounded-full bg-black/30">
                <Avatar.Image
                    className="w-full h-full object-cover rounded-inherit"
                    src="https://github.com/carlosgodoi.png"
                    alt="Foto de usuário"
                />
                <Avatar.Fallback
                    className="w-full h-full flex items-center justify-center bg-white text-violet-800 text-[15px] leading-none font-medium"
                    delayMs={600}
                >
                    CT
                </Avatar.Fallback>
            </Avatar.Root>
            <span className="text-secondary text-base font-medium">{userName}</span>
        </div >
    )
}

export default UserAvatar;
