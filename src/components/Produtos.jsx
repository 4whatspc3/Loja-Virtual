import convertaParaReal from "../utils/convertaParaReal";

const Produtos = ({produto, addShopCart}) => {

    return (
            <li>
                <figure><img style={{width : '100px', height: 'auto'}} src={produto.image} alt={produto.description} /></figure>
                <header><h2>{produto.title}</h2></header>
                <div><p>{convertaParaReal(produto.price)}</p></div>
                <footer>
                        <button onClick={ () => addShopCart(produto) }>Adicionar ao carrinho</button>
                </footer>
            </li>
            )
}

export default Produtos;