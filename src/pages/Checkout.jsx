import { useNavigate } from "react-router-dom";
import ProdutosCheckout from "../components/ProdutosCheckout";

const Checkout = ({arrayCarrinho, addShopCart, removeShopCart}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    return (<div className="p-6 flex flex-col gap-20">
        <h1 className="mx-auto text-3xl font-inter font-medium text-sky-700">Carrinho de compras</h1>
        <ul className="flex flex-col gap-4">
            {arrayCarrinho.map((itemDoCarrinho, index) => 
                <ProdutosCheckout key={index} itemDoCarrinho={itemDoCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart}/>
            )}
        </ul>
        <div className="mx-auto">
            <button onClick={ handleClick } className="bg-sky-300 border border-sky-200 p-2 rounded-2xl font-inter font-medium text-white text-xl">Voltar</button>
        </div>
    </div>)
}

export default Checkout;