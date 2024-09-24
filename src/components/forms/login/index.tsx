'use client';

import { ButtonDeafult } from '@/components/buttonDefault';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons'
import { useState } from 'react';

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <form className="
      flex
      flex-col
      w-[700px]
      max-w-full
      gap-3
      bg-[rgba(255,255,255,0.05)]  
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
      backdrop-blur-[10px]  
      rounded-[10px] 
      border border-[rgba(255,255,255,0.18)]
      px-8
      py-10
      mt-8
    ">
            <h2 className="text-purple_60 text-3xl text-center">Faça seu Login</h2>

            <label className="text-purple_60 text-lg font-semibold">Email</label>
            <input className="
        w-full
        h-14
        bg-gray_20 
        rounded-md 
        text-gray_60 
        placeholder:text-gray_60 
        pl-3 
        border 
        border-transparent 
        focus:border-purple_60 
        focus:outline-none
      "
                type="email"
                placeholder="Digite seu Email"
            />

            <label className="text-purple_60 text-lg font-semibold">Senha</label>
            <div className="relative w-full">
                <input className="w-full h-14 bg-gray_20 rounded-md text-gray_60 placeholder:text-gray_60 pl-3 pr-10 border 
          border-transparent focus:border-purple_60 focus:outline-none"
                    type={showPassword ? "text" : 'password'}
                    placeholder="Digite sua Senha"
                />
                <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                        <EyeOpenIcon width={25} height={25} color="#7a00ff" />
                    ) : (
                        <EyeClosedIcon width={25} height={25} color="#7a00ff" />
                    )}
                </div>
            </div>
            <div className='flex justify-end mt-4'>
                <ButtonDeafult variant='primary'>Entrar</ButtonDeafult>
            </div>
        </form>
    );
};
