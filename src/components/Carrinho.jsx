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
                <details className="fixed right-0 flex flex-col gap-4 p-4 overflow-y-auto">
                    <summary className="bg-white/80 text-sky-700 font-medium rounded-4xl border border-sky-300 p-2">Carrinho</summary>
                    <ul className="flex flex-col gap-4 bg-white/80 p-4 mb-4 w-full max-w-80 h-60 overflow-auto rounded-4xl border border-sky-300">
                        {arrayCarrinho.map((itemDoCarrinho) => 
                            <ProdutosCarrinho key={itemDoCarrinho.id} itemDoCarrinho={itemDoCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart}/>
                        )}
                    </ul>
                    <div className="flex gap-4 bg-white/80 p-4 border border-sky-300 rounded-4xl justify-between items-center">
                        <p className="font-medium font-inter text-sky-800">Total: {valorTotal}</p>
                        <button onClick={ handleClick } className="p-2 rounded-lg border border-green-500 text-green-500">Finalizar a compra</button>
                    </div>
                </details>
        )
}

export default Carrinho;