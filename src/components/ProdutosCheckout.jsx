import convertaParaReal from "../utils/convertaParaReal";

const ProdutosCheckout = ({itemDoCarrinho, addShopCart, removeShopCart}) => {    
    return (
            <li>
                <figure><img style={{width : '50px', height: 'auto'}} src={itemDoCarrinho.image} alt={itemDoCarrinho.description} /></figure>
                <header><h2>{itemDoCarrinho.title}</h2></header>
                <div><p>{ convertaParaReal(itemDoCarrinho.price)}</p></div>
                <footer>
                        <p>Quantidade: {itemDoCarrinho.quantidade}</p>
                        <div>
                            <button onClick={ () => removeShopCart(itemDoCarrinho) }>-</button>
                            <button onClick={ () => addShopCart(itemDoCarrinho) }>+</button>
                        </div>
                </footer>
            </li>
            )
}

export default ProdutosCheckout;