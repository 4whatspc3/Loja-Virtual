import './App.css'
import { useState } from 'react'
import PaginaDeProdutos from './pages/PaginaDeProdutos'
import Carrinho from './components/Carrinho'

function App() {

  const [arrayCarrinho, setArrayCarrinho] = useState([])

  return (
    <>
      <Carrinho arrayCarrinho={arrayCarrinho} />
      <PaginaDeProdutos  />
    </>
  )
}

export default App
