import './App.css'
import { useState, useEffect } from 'react'
import PaginaDeProdutos from './pages/PaginaDeProdutos'
import { Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout'
import convertaParaReal from './utils/convertaParaReal'
import Home from './pages/Home'
import Detalhes from './components/Detalhes'
import Carrinho from './components/Carrinho'

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
      const calculoTotal = arrayCarrinho.reduce((acc, curr) => acc + (curr.price * curr.quantidade), 0 );

      const resultado = convertaParaReal(calculoTotal)

      setValortotal(resultado)
    }, [arrayCarrinho])

  return (
    <>
      <Carrinho arrayCarrinho={arrayCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart} valorTotal={valorTotal}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos/' element={ <PaginaDeProdutos addShopCart={addShopCart} />}/>
        <Route path='/checkout' element={ <Checkout arrayCarrinho={arrayCarrinho} addShopCart={addShopCart} removeShopCart={removeShopCart}/>}/>
        <Route path='/produtos/:id' element={ <Detalhes addShopCart={addShopCart}/>}></Route>
      </Routes>
    </>
  )
}

export default App
