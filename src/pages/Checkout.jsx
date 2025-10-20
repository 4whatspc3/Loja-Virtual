import { useLocation } from "react-router-dom";
import ProdutosCarrinho from "../components/ProdutosCarrinho";

const Checkout = ({arrayCarrinho, addShopCart, removeShopCart}) => {

    return (<>
        <h1>Carrinho de compras</h1>
        <ul>
            {arrayCarrinho.map((itemDoCarrinho, index) => 
                <ProdutosCarrinho key={index} itemDoCarrinho={itemDoCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart}/>
            )}
        </ul>
    </>)
}

export default Checkout;