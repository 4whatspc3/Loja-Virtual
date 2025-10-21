import { useEffect, useState } from "react";
import Produtos from "../components/Produtos";
import requestAPI from "../utils/requestAPI";
import Filtro from "../components/Filtro";

const PaginaDeProdutos = ({addShopCart, removeShopCart}) => {

    const [arrayDeProdutos, setArrayDeProdutos] = useState([])
    const [produtosFiltrados, setProdutosFiltrados] = useState([])
    const [valorFiltro, setValorFiltro] = useState('All')

    useEffect(() => {
        requestAPI('https://fakestoreapi.com/products', setArrayDeProdutos);
    }, [])

    useEffect(() => {
        const filtre = arrayDeProdutos.map((item) => item)
        .filter((item) => valorFiltro === 'All' ? item : item.category === valorFiltro)

        setProdutosFiltrados(filtre)

    }, [valorFiltro, arrayDeProdutos])

    const handleFiltro = (categoria) => {
        categoria === "men's clothing" ? setValorFiltro("men's clothing") :
        categoria === "women's clothing" ? setValorFiltro("women's clothing") :
        categoria === "jewelery" ?  setValorFiltro("jewelery") :
        categoria === ("electronics") ? setValorFiltro("electronics") :
        setValorFiltro("All")
    }

    return (<>
                <Filtro device={'desktop'} handleFiltro={handleFiltro}/>
                <ul>
                    {produtosFiltrados.map((produto) => <Produtos key={produto.id} produto={produto} addShopCart={addShopCart}/>)}
                </ul>
            </>)
}

export default PaginaDeProdutos;