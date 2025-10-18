const ProdutosCarrinho = ({itemDoCarrinho, addShopCart, removeShopCart}) => {
    
    return (
            <li>
                <figure><img style={{width : '50px', height: 'auto'}} src={itemDoCarrinho.image} alt={itemDoCarrinho.description} /></figure>
                <header><h2>{itemDoCarrinho.title}</h2></header>
                <div><p>{itemDoCarrinho.price}</p></div>
                <footer>
                        <button onClick={ () => removeShopCart(itemDoCarrinho.id) }>-</button>
                        <button onClick={ () => addShopCart(itemDoCarrinho) }>+</button>
                </footer>
            </li>
            )
}

export default ProdutosCarrinho;