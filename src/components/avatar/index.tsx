import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { useAuthContext } from "@/context/authContext";

export const UserAvatar: React.FC = () => {
    const { user } = useAuthContext()

    return (
        < div className="flex items-center gap-3" >
            <Avatar.Root className="inline-flex items-center justify-center overflow-hidden select-none w-11 h-11 rounded-full bg-black/30">
                <Avatar.Image
                    className="w-full h-full object-cover rounded-inherit"
                    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                    alt="Foto de usuário"
                />
                <Avatar.Fallback
                    className="w-full h-full flex items-center justify-center bg-white text-violet-800 text-[15px] leading-none font-medium"
                    delayMs={600}
                >
                    CT
                </Avatar.Fallback>
            </Avatar.Root>
            <span className="text-secondary text-base font-medium">{user.nome}</span>
        </div >
    )
}

export default UserAvatar;
