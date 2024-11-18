export const maskCep = (value: string) => {
    // Remove tudo que não for número
    value = value.replace(/\D/g, '');

    // Aplica a máscara
    if (value.length <= 5) {
        return value.replace(/(\d{2})(\d{0,3})/, '$1.$2');
    } else {
        return value.replace(/(\d{2})(\d{3})(\d{0,3})/, '$1.$2-$3');
    }
};

