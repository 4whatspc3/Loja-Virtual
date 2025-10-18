import ProdutosCarrinho from "./ProdutosCarrinho"

const Carrinho = ({arrayCarrinho}) => {

        return(
            <ul>
                {arrayCarrinho.map((itemDoCarrinho) => 
                    <ProdutosCarrinho key={itemDoCarrinho.id} itemDoCarrinho={itemDoCarrinho}/>
                )}
            </ul>
        )
}

export default Carrinho;