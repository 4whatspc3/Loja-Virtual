const addShopCart = (produto, carrinho, setCarrinho) => {

    const checkProduto = carrinho.find( (item) => item.id === produto.id);
    
    if(checkProduto){
    const novoCarrinho = carrinho.map((item) => item.id === produto.id ?  {...item, quantidade : item.quantidade + 1} : item)

    setCarrinho(novoCarrinho)
    } else {
    const novoProduto = {...produto, quantidade : 1}

    setCarrinho((prev) => [...prev, novoProduto])
    }
}

const removeShopCart = (produto, carrinho, setCarrinho) => {
    const checkProduto = carrinho.find((item) => item.id === produto.id && produto.quantidade === 1);

    if(checkProduto){
        setCarrinho(carrinho.filter((item) => item.id !== produto.id))
    } else {
        const novoCarrinho = carrinho.map((item) => item.id === produto.id ?  {...item, quantidade : item.quantidade - 1} : item)

        setCarrinho(novoCarrinho)
    }
}

const caculeValorTotal = (carrinho, setTotal) => {
    setTotal(carrinho.reduce((acc, curr) => acc + (curr.price * curr.quantidade), 0 ))
}


export { addShopCart, removeShopCart, caculeValorTotal}