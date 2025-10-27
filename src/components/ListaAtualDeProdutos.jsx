import Produtos from "./Produtos"

const ListaAtualDeProdutos = ({ produtosFiltrados, addShopCart }) => {
    return (<ul className="flex flex-col gap-4">
                {produtosFiltrados.map((produto) => <Produtos key={produto.id} produto={produto} addShopCart={addShopCart}/>)}
            </ul>)
}

export default ListaAtualDeProdutos;