import { useNavigate } from "react-router-dom"
import ProdutosCarrinho from "./ProdutosCarrinho"

const Carrinho = ({arrayCarrinho, addShopCart, removeShopCart}) => {
        const navigate = useNavigate()

        const handleClick = () => {
            navigate('/checkout', { state : {arrayCarrinho}})
        }

        return(
            <ul>
                {arrayCarrinho.map((itemDoCarrinho, index) => 
                    <ProdutosCarrinho key={index} itemDoCarrinho={itemDoCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart}/>
                )}
                <div>
                    <button onClick={ handleClick }>Finalizar a compra</button>
                </div>
            </ul>
        )
}

export default Carrinho;