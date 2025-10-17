const Produtos = ({arrayDeProdutos}) => {
    
    return (<ul>
                {arrayDeProdutos.map((produto) => 
                    <li key={produto.id}>
                        <figure><img src={produto.image} alt={produto.description} /></figure>
                        <header><h2>{produto.title}</h2></header>
                        <div><p>{produto.price}</p></div>
                        <footer>
                                <button>-</button>
                                <button>+</button>
                        </footer>
                    </li>
                )}
            </ul>)
}

export default Produtos;