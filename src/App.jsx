import './App.css'
import { useState } from 'react'
import PaginaDeProdutos from './pages/PaginaDeProdutos'
import Carrinho from './components/Carrinho'
import { Route, Routes } from 'react-router-dom'

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

  const removeShopCart = (produto) => {
    const checkProduto = arrayCarrinho.find((item) => item.id === produto.id && produto.quantidade === 1);

    if(checkProduto){
      setArrayCarrinho(arrayCarrinho.filter((item) => item.id !== produto.id))
    } else {
      const novoCarrinho = arrayCarrinho.map((item) => item.id === produto.id ?  {...item, quantidade : item.quantidade - 1} : item)

      setArrayCarrinho(novoCarrinho)
    }
  }

  return (
    <>
      <Carrinho arrayCarrinho={arrayCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart} />
      <Routes>
        <Route path='/' element={ <PaginaDeProdutos addShopCart={addShopCart} removeShopCart={removeShopCart}/>}/>
      </Routes>
    </>
  )
}

export default App
