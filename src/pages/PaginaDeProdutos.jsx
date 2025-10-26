import { useEffect, useState } from "react";
import requestAPI from "../utils/requestAPI";
import Filtro from "../components/Filtro";
import ListaAtualDeProdutos from "../components/ListaAtualDeProdutos";
import Detalhes from "../components/Detalhes";
import Hero from "../components/layout/Hero";

const PaginaDeProdutos = ({addShopCart}) => {

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
                <Hero />
                <Filtro device={'desktop'} handleFiltro={handleFiltro}/>
                <ListaAtualDeProdutos produtosFiltrados={produtosFiltrados} addShopCart={addShopCart}/>
                <Detalhes addShopCart={addShopCart}/>
            </>)
}

export default PaginaDeProdutos;