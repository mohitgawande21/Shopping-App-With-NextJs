import '../styles/globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {  useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [cart, setCart] = useState({})

  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {

    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
        saveCart(cart)
      }
    }
    catch(err){
      console.log(err)
    }
}, [router.query])

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt = myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubTotal(subt)
  }

  const addTOCart = (itemCode, qty, price, name, size, varian) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, varian }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, varian) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty - qty
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  return <>
        <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime = {300}
        onLoaderFinished={() => setProgress(0)}
      />
    <Navbar cart={cart} subTotal={subTotal} addTOCart={addTOCart} clearCart={clearCart} removeFromCart={removeFromCart} saveCart={saveCart} />
    <Component cart={cart}  subTotal={subTotal} addTOCart={addTOCart} clearCart={clearCart} removeFromCart={removeFromCart} saveCart={saveCart} {...pageProps} />
    <Footer />
  </>

}

export default MyApp
