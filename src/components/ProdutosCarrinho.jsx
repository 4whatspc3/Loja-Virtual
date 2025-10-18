const ProdutosCarrinho = ({itemDoCarrinho, id}) => {
    
    return (
            <li key={itemDoCarrinho.id}>
                <figure><img style={{width : '50px', height: 'auto'}} src={itemDoCarrinho.image} alt={itemDoCarrinho.description} /></figure>
                <header><h2>{itemDoCarrinho.title}</h2></header>
                <div><p>{itemDoCarrinho.price}</p></div>
                <footer>
                        <button>-</button>
                        <button>+</button>
                </footer>
            </li>
            )
}

export default ProdutosCarrinho;