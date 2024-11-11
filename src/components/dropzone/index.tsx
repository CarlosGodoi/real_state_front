import { UploadSimple } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

interface IProps {
    onUploadImage: (files: File[]) => void;
    onSetBaseImage: (images: string[]) => void;
    type: string;
    id: string;
    name: string;
}

export const DropzoneImage: React.FC<IProps> = ({
    id,
    name,
    onUploadImage,
    type,
}) => {
    const [files, setFiles] = useState<(File & { preview: string })[]>([]);
    const { getInputProps, getRootProps, acceptedFiles, fileRejections } =
        useDropzone({
            maxFiles: 3,
            accept: {
                "image/*": [".jpg", ".jpeg", ".png"],
            },
            onDrop: (acceptedFiles) => {
                const newFiles = acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                );
                setFiles([...files, ...newFiles]);
                onUploadImage(acceptedFiles);
            },
        });

    const handleRemoveFile = (fileToRemove: File & { preview: string }) => {
        setFiles(files.filter((file) => file !== fileToRemove));
    };

    const preview = files.map((file) => (
        <div
            key={file.preview}
            className="relative w-full h-72 rounded-lg overflow-hidden">
            <Image
                src={file.preview}
                alt="preview"
                fill={true}
                className="object-cover"
            />
            <button
                onClick={() => handleRemoveFile(file)}
                className="w-6 h-6 absolute top-4 right-4 bg-red-600 text-white rounded-full text-xs">
                X
            </button>
        </div>
    ));

    const showUploadArea = files.length === 0;

    return (
        <div className="w-full flex flex-col gap-3 border-2 border-gray_10 rounded-lg p-4 mt-4">
            <div className="w-full p-3 flex justify-center items-center bg-gray_15 text-white text-xl rounded-lg">
                <h2>Upload de Imagens</h2>
            </div>

            {showUploadArea && (
                <div
                    className="w-full h-72 flex justify-center items-center border-2 border-dashed border-gray_15 rounded-lg"
                    {...getRootProps()}>
                    <input
                        type={type}
                        id={id}
                        name={name}
                        {...getInputProps()}
                    />
                    <div className="flex flex-col gap-2 justify-center items-center text-center cursor-pointer">
                        <UploadSimple size={30} className="text-secondary" />
                        <p className="text-secondary">Arraste ou clique para selecionar arquivos</p>
                    </div>
                </div>
            )}

            {files.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mt-3">
                    {preview}
                </div>
            )}

            <div className="mt-3 text-sm font-semibold">
                {acceptedFiles.length > 0 && (
                    <p className="text-green-600">Arquivos aceitos: {acceptedFiles.length}</p>
                )}
                {fileRejections.length > 0 && (
                    <p className="text-red-600">Arquivos rejeitados: {fileRejections.length}</p>
                )}
            </div>
        </div>
    );
};
