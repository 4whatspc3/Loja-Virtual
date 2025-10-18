import { useEffect, useState } from "react";
import Produtos from "../components/Produtos";
import requestAPI from "../utils/requestAPI";


const PaginaDeProdutos = ({addShopCart}) => {

    const [arrayDeProdutos, setArrayDeProdutos] = useState([])

    useEffect(() => {
        requestAPI('https://fakestoreapi.com/products', setArrayDeProdutos);
    }, [])

    return (<>
                <Produtos arrayDeProdutos={arrayDeProdutos} addShopCart={addShopCart}/>
            </>)
}

export default PaginaDeProdutos;