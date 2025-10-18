import ProdutosCarrinho from "./ProdutosCarrinho"

const Carrinho = ({arrayCarrinho}) => {

        return(
            <ul>
                {arrayCarrinho.map((itemDoCarrinho) => 
                    <ProdutosCarrinho id={itemDoCarrinho.id} itemDoCarrinho={itemDoCarrinho}/>
                )}
            </ul>
        )
}

export default Carrinho;