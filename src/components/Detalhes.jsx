import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import convertaParaReal from "../utils/convertaParaReal";
import requestAPI from "../utils/requestAPI";

const Detalhes = ({addShopCart}) => {
    const { id } = useParams();
    const [produto, setProduto] = useState({})

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    useEffect(() => {
        requestAPI(`https://fakestoreapi.com/products/${id}`, setProduto);
    }, [])

    return (
    <div>
        <figure><img style={{width : '100px', height: 'auto'}} src={produto.image} alt={produto.description} /></figure>
        <header><h2>{produto.title}</h2></header>
        <div><p>{produto.description}</p></div>
        <div><p>{convertaParaReal(produto.price)}</p></div>
        <footer>
            <button onClick={ handleClick }>Voltar</button>
            <button onClick={ () => addShopCart(produto) }>Adicionar ao carrinho</button>
        </footer>
    </div>)
}

export default Detalhes;