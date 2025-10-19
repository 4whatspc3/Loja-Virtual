import './App.css'
import { useState } from 'react'
import PaginaDeProdutos from './pages/PaginaDeProdutos'
import Carrinho from './components/Carrinho'

function App() {

  const [arrayCarrinho, setArrayCarrinho] = useState([])

  const addShopCart = (produto) => {

      const checkProduto = arrayCarrinho.find( (item) => item.id === produto.id);
      
      if(checkProduto){
        const novoCarrinho = arrayCarrinho.map((item) => item.id === produto.id ?  {...item, quantidade : item.quantidade + 1} : item)

        setArrayCarrinho(novoCarrinho)
      } else {
        const novoProduto = {...produto, quantidade : 1}

        setArrayCarrinho((prev) => [...prev, novoProduto])
      }
  }

  const removeShopCart = (produtoID) => {
    setArrayCarrinho(arrayCarrinho.filter((produto) => produto.id !== produtoID))
  }

  return (
    <>
      <Carrinho arrayCarrinho={arrayCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart} />
      <PaginaDeProdutos addShopCart={addShopCart} removeShopCart={removeShopCart}/>
    </>
  )
}

export default App
