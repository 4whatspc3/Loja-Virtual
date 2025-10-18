import './App.css'
import { useState } from 'react'
import PaginaDeProdutos from './pages/PaginaDeProdutos'
import Carrinho from './components/Carrinho'

function App() {

  const [arrayCarrinho, setArrayCarrinho] = useState([])

  const addShopCart = (produto) => {
      setArrayCarrinho((prev) => [...prev, produto])
  }

  return (
    <>
      <Carrinho arrayCarrinho={arrayCarrinho} />
      <PaginaDeProdutos addShopCart={addShopCart}/>
    </>
  )
}

export default App
