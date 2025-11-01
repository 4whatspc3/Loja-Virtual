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
    <div className="flex flex-col gap-6 rounded-4xl p-4 bg-sky-50">
        <figure className="bg-white w-full p-4 rounded-2xl"><img style={{width : '100px', height: 'auto'}} src={produto.image} alt={produto.description} className="mx-auto w-40 h-40 object-contain" /></figure>
        <header><h2 className="text-lg font-medium font-inter text-sky-800">{produto.title}</h2></header>
        <div className="bg-white p-2 rounded-2xl"><p className="text-lg font-medium font-inter text-sky-900 mt-3">{produto.description}</p></div>
        <div className="bg-white p-2 rounded-2xl"><p className="text-lg font-medium font-inter italic text-sky-900 mt-3">{convertaParaReal(produto.price)}</p></div>
        <footer className="flex gap-2">
            <button onClick={ handleClick } className="bg-sky-300 border border-sky-200 p-2 rounded-2xl font-inter font-medium text-white text-xl">Voltar</button>
            <button onClick={ () => addShopCart(produto) } className="bg-sky-300 border border-sky-200 p-2 rounded-2xl font-inter font-medium text-white text-xl">Adicionar ao carrinho</button>
        </footer>
    </div>)
}

export default Detalhes;