import { useNavigate } from "react-router-dom";
import convertaParaReal from "../utils/convertaParaReal";
import limitarString from "../utils/limitarString";

const Produtos = ({produto, addShopCart}) => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/produtos/${id}`, { state : {name : 'joão'} })
    }
    
    return (
            <li className="w-full max-w-90 h-110 flex flex-col justify-between gap-6 rounded-4xl p-4 bg-sky-50">
                <figure className="bg-white w-full p-4 rounded-2xl"><img onClick={ () => handleClick(produto.id) } src={produto.image} alt={produto.description} className="mx-auto w-40 h-40 object-contain"/></figure>
                <header><h2 className="text-lg font-medium font-inter text-sky-800">{limitarString(produto.title)}</h2></header>
                <footer className="flex justify-between gap-2">
                        <div className="bg-white p-2 rounded-2xl"><p className="text-lg font-medium font-inter italic text-sky-900 mt-3">{convertaParaReal(produto.price)}</p></div>
                        <button onClick={ () => addShopCart(produto) } className="bg-sky-300 border border-sky-200 p-2 rounded-2xl font-inter font-medium text-white text-xl">Adicionar ao carrinho</button>
                </footer>
            </li>
            )
}

export default Produtos;