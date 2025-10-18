import './App.css'
import { useState } from 'react'
import PaginaDeProdutos from './pages/PaginaDeProdutos'
import Carrinho from './components/Carrinho'

function App() {

  const [arrayCarrinho, setArrayCarrinho] = useState([])

  const addShopCart = (produto) => {
      setArrayCarrinho((prev) => [...prev, produto])
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
