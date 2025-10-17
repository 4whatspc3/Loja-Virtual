import { useEffect, useState } from "react";
import Produtos from "../components/Produtos";
import requestAPI from "../utils/requestAPI";


const PaginaDeProdutos = () => {

    const [arrayDeProdutos, setArrayDeProdutos] = useState([])

    useEffect(() => {
        requestAPI('https://fakestoreapi.com/products', setArrayDeProdutos);
    }, [])

    return (<>
                <Produtos arrayDeProdutos={arrayDeProdutos} />
            </>)
}

export default PaginaDeProdutos;