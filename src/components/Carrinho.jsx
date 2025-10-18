import ProdutosCarrinho from "./ProdutosCarrinho"

const Carrinho = ({arrayCarrinho}) => {

        return(
            <ul>
                {arrayCarrinho.map((itemDoCarrinho, index) => 
                    <ProdutosCarrinho key={index} itemDoCarrinho={itemDoCarrinho}/>
                )}
            </ul>
        )
}

export default Carrinho;