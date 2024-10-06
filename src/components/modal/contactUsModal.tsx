import React from 'react';
import { InputDefault } from '../inputDefault';
import { ButtonDefault } from '../buttonDefault';

interface IModalProps {
    open: boolean;
    close: () => void;
}

export const ContactUsModal: React.FC<IModalProps> = ({ open, close }) => {
    if (!open) return null; // Se o modal não estiver aberto, não renderiza nada

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-gray_10 rounded-lg shadow-lg w-11/12 md:w-1/3 p-6">
                <h2 className="text-purple_60 text-xl font-bold mb-4">Entre em Contato</h2>
                <form className='flex flex-col gap-3'>
                    <InputDefault label='Nome' type='text' />

                    <InputDefault label='Email' type='email' />

                    <InputDefault label='Telefone' type='tel' />


                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-semibold text-purple_60">Mensagem</label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            className="mt-1 block w-full p-2 h-14 bg-gray_20 rounded-md text-gray_60 placeholder:text-gray_60 pl-3 border border-transparent
                            focus:border-purple_60 focus:outline-none">
                        </textarea>
                    </div>
                    <div className="flex justify-end gap-3">
                        <ButtonDefault onClick={close}>Cancelar</ButtonDefault>
                        <ButtonDefault variant='primary'>Enviar</ButtonDefault>
                    </div>
                </form>
            </div>
        </div>
    );
};
