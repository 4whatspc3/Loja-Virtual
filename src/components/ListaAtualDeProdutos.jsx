import Produtos from "./Produtos"

const ListaAtualDeProdutos = ({ produtosFiltrados, addShopCart }) => {
    return (<ul>
                {produtosFiltrados.map((produto) => <Produtos key={produto.id} produto={produto} addShopCart={addShopCart}/>)}
            </ul>)
}

export default ListaAtualDeProdutos;