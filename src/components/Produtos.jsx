const Produtos = ({produto, addShopCart, removeShopCart}) => {

    return (
            <li>
                <figure><img style={{width : '100px', height: 'auto'}} src={produto.image} alt={produto.description} /></figure>
                <header><h2>{produto.title}</h2></header>
                <div><p>{produto.price}</p></div>
                <footer>
                        <button onClick={ () => removeShopCart(produto) }>-</button>
                        <button onClick={ () => addShopCart(produto) }>+</button>
                </footer>
            </li>
            )
}

export default Produtos;