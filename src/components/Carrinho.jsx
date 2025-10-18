import ProdutosCarrinho from "./ProdutosCarrinho"

const Carrinho = ({arrayCarrinho, addShopCart, removeShopCart}) => {

        return(
            <ul>
                {arrayCarrinho.map((itemDoCarrinho, index) => 
                    <ProdutosCarrinho key={index} itemDoCarrinho={itemDoCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart}/>
                )}
            </ul>
        )
}

export default Carrinho;