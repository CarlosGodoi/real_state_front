export const maskCep = (value: string) => {
    // Remove tudo que não for número
    const numericValue = value.replace(/\D/g, '');

    // Limita a entrada a no máximo 8 caracteres
    const limitedValue = numericValue.slice(0, 8);

    // Aplica a máscara
    if (limitedValue.length <= 5) {
        return limitedValue.replace(/(\d{2})(\d{0,3})/, '$1.$2');
    } else {
        return limitedValue.replace(/(\d{2})(\d{3})(\d{0,3})/, '$1.$2-$3');
    }
};
