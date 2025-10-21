import { useNavigate } from "react-router-dom";
import ProdutoosCheckout from "../components/ProdutosCheckout";

const Checkout = ({arrayCarrinho, addShopCart, removeShopCart}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    return (<>
        <h1>Carrinho de compras</h1>
        <ul>
            {arrayCarrinho.map((itemDoCarrinho, index) => 
                <ProdutoosCheckout key={index} itemDoCarrinho={itemDoCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart}/>
            )}
        </ul>
        <div>
            <button onClick={ handleClick }>Voltar</button>
        </div>
    </>)
}

export default Checkout;