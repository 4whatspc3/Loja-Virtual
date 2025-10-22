import { useNavigate } from "react-router-dom";
import convertaParaReal from "../utils/convertaParaReal";

const Produtos = ({produto, addShopCart}) => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/produtos/${id}`, { state : {name : 'joão'} })
    }
    
    return (
            <li>
                <figure><img onClick={ () => handleClick(produto.id) } style={{width : '100px', height: 'auto'}} src={produto.image} alt={produto.description} /></figure>
                <header><h2>{produto.title}</h2></header>
                <div><p>{convertaParaReal(produto.price)}</p></div>
                <footer>
                        <button onClick={ () => addShopCart(produto) }>Adicionar ao carrinho</button>
                </footer>
            </li>
            )
}

export default Produtos;