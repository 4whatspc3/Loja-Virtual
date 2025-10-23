import { useNavigate, useLocation } from "react-router-dom"
import ProdutosCarrinho from "./ProdutosCarrinho"

const Carrinho = ({arrayCarrinho, addShopCart, removeShopCart, valorTotal}) => {
        const navigate = useNavigate()
        const location = useLocation()

        const handleClick = () => {
            navigate('/checkout')
        }

        return(location.pathname === '/' || location.pathname === '/checkout' ?
                (<></>) :
                <ul>
                    {arrayCarrinho.map((itemDoCarrinho) => 
                        <ProdutosCarrinho key={itemDoCarrinho.id} itemDoCarrinho={itemDoCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart}/>
                    )}
                    <div>
                        <p>{valorTotal}</p>
                        <button onClick={ handleClick }>Finalizar a compra</button>
                    </div>
                </ul>
        )
}

export default Carrinho;