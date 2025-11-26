import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'



function App() {
  const [cart, setCart] = useState([])

  const handleCart = (product) => {
    setCart((prevCart) => [...prevCart, product])

    console.log('Added')
    console.log(cart)
  }

  return (
    <>
      <Products cart={cart} setCart={setCart} handleCart={handleCart} />
      <Cart cart={cart} setCart={setCart}/>
    </>
  )
}

export default App
