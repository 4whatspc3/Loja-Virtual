const Produtos = ({arrayDeProdutos, valorFiltro, addShopCart, removeShopCart}) => {

    const produtosFiltrados = arrayDeProdutos.map((item) => item).filter((item) => valorFiltro === 'All' ? item : item.category === valorFiltro)

    return (<ul>
                {produtosFiltrados.map((produto) => 
                    <li key={produto.id}>
                        <figure><img style={{width : '100px', height: 'auto'}} src={produto.image} alt={produto.description} /></figure>
                        <header><h2>{produto.title}</h2></header>
                        <div><p>{produto.price}</p></div>
                        <footer>
                                <button onClick={ () => removeShopCart(produto) }>-</button>
                                <button onClick={ () => addShopCart(produto) }>+</button>
                        </footer>
                    </li>
                )}
            </ul>)
}

export default Produtos;