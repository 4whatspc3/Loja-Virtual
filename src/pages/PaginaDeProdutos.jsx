import { useEffect, useState } from "react";
import Produtos from "../components/Produtos";
import requestAPI from "../utils/requestAPI";
import Filtro from "../components/Filtro";

const PaginaDeProdutos = ({addShopCart, removeShopCart}) => {

    const [arrayDeProdutos, setArrayDeProdutos] = useState([])
    const [valorFiltro, setValorFiltro] = useState('All')

    useEffect(() => {
        requestAPI('https://fakestoreapi.com/products', setArrayDeProdutos);
    }, [])

    const handleFiltro = (categoria) => {
        categoria === "men's clothing" ? setValorFiltro("men's clothing") :
        categoria === "women's clothing" ? setValorFiltro("women's clothing") :
        categoria === "jewelery" ?  setValorFiltro("jewelery") :
        categoria === ("electronics") ? setValorFiltro("electronics") :
        setValorFiltro("All")
    }

    return (<>
                <Filtro device={'desktop'} handleFiltro={handleFiltro}/>
                <Produtos arrayDeProdutos={arrayDeProdutos} valorFiltro={valorFiltro} addShopCart={addShopCart} removeShopCart={removeShopCart}/>
            </>)
}

export default PaginaDeProdutos;