import './App.css'
import { useState, useEffect } from 'react'
import PaginaDeProdutos from './pages/PaginaDeProdutos'
import Carrinho from './components/Carrinho'
import { Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout'

function App() {

  const [arrayCarrinho, setArrayCarrinho] = useState([])
  const [valorTotal, setValortotal] = useState(0)

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

    useEffect(() => {
      setValortotal(arrayCarrinho.reduce((acc, curr) => acc + curr.price, 0 ))
    }, [arrayCarrinho])

  return (
    <>
      <Carrinho arrayCarrinho={arrayCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart} valorTotal={valorTotal}/>
      <Routes>
        <Route path='/' element={ <PaginaDeProdutos addShopCart={addShopCart} removeShopCart={removeShopCart}/>}/>
        <Route path='/checkout' element={ <Checkout arrayCarrinho={arrayCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart}/>}/>
      </Routes>
    </>
  )
}

export default App
