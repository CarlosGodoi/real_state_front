import React, { useEffect, useState } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { useAuthContext } from "@/context/authContext";

const UserAvatar: React.FC = () => {
    const { user } = useAuthContext();
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        if (user && user.nome) {
            console.log("Usuário encontrado no contexto:", user);
            setTimeout(() => {
                setUserName(user.nome);
            }, 300); // Atraso para permitir sincronização
        } else {
            setUserName("Usuário");
        }
    }, [user]);


    useEffect(() => {
        console.log("Atualização do estado do usuário no contexto:", user);
    }, [user]);

    return (
        <div className="flex items-center gap-3">
            <Avatar.Root className="inline-flex items-center justify-center overflow-hidden select-none w-11 h-11 rounded-full bg-black/30">
                <Avatar.Image
                    className="w-full h-full object-cover rounded-inherit"
                    src=""
                    alt="Foto de usuário"
                />
                <Avatar.Fallback
                    className="w-full h-full flex items-center justify-center bg-purple_65 text-secondary text-lg leading-none font-medium"
                    delayMs={600}
                >
                    {userName?.charAt(0) || "?"}
                </Avatar.Fallback>
            </Avatar.Root>
            <span className="text-secondary text-base font-medium">
                {userName}
            </span>
        </div>
    );
};

export default UserAvatar;
