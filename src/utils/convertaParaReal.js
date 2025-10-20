const convertaParaReal = (valor) => {
    if (typeof valor !== 'number' || isNaN(valor)) {
        return 'R$ 0,00';
    }

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valor);
};

export default convertaParaReal;