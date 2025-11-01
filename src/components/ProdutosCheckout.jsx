import convertaParaReal from "../utils/convertaParaReal";

const ProdutosCheckout = ({itemDoCarrinho, addShopCart, removeShopCart}) => {    
    return (
            <li className="w-full max-w-200 mx-auto flex flex-col gap-8 rounded-4xl rounded-b-none p-4 pt-0 border-b-2 border-sky-700">
                <header className="flex flex-col gap-6">
                    <figure className="w-full p-2 rounded-2xl"><img src={itemDoCarrinho.image} alt={itemDoCarrinho.description} className="mx-auto w-40 h-40 object-contain"/></figure>
                    <h2 className="font-medium font-inter text-sky-800 ">{itemDoCarrinho.title}</h2>
                </header>
                <footer className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 justify-between font-medium font-inter text-sky-800">
                        <p >Quantidade: {itemDoCarrinho.quantidade}</p>
                        <p className="italic">Unidade: { convertaParaReal(itemDoCarrinho.price)}</p>
                    </div>
                    <div className="flex gap-4 ml-auto">
                        <button onClick={ () => removeShopCart(itemDoCarrinho) } className="w-10 h-10 pl-2 pr-2 rounded-lg border border-red-500 text-red-500">-</button>
                        <button onClick={ () => addShopCart(itemDoCarrinho) } className="w-10 h-10 pl-2 pr-2 rounded-lg border border-green-500 text-green-500">+</button>
                    </div>
                </footer>
            </li>
            )
}

export default ProdutosCheckout;