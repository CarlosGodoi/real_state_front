export const maskPrice = (value: string | number | null | undefined) => {
    if (!value) return "R$0,00";

    // Converte para string e remove caracteres não numéricos
    const numero = typeof value === "string" ? value.replace(/\D/g, "") : String(value).replace(/\D/g, "");

    // Remove zeros à esquerda
    const numeroSemZeros = numero.replace(/^0+/, "");

    // Pad com zeros à esquerda, se necessário
    const paddedNumero = numeroSemZeros.padStart(3, "0");

    // Insere o ponto decimal
    const valorComPonto = paddedNumero.slice(0, -2) + "." + paddedNumero.slice(-2);

    // Converte para número e formata como moeda
    return parseFloat(valorComPonto).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};
