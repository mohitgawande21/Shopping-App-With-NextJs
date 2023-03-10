import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { IoIosBriefcase } from "react-icons/io";
import {MdAccountCircle} from 'react-icons/md'

export default function Navbar({ clearCart, cart, removeFromCart, addTOCart }) {
    const router = useRouter()
    const [cartDrwer, setCartDrwer] = useState(false)
    const closeCart = () => {
        setCartDrwer(!cartDrwer)
    }
    return (
        <div className='sticky top-0 bg-pink-100 z-10' >
            <div className="text-gray-600 body-font ">
                <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                    <Link href={'/'}><span className="ml-3 font-medium text-gray-900 title-font text-xl  ">CodesWear</span></Link>

                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href={'/tshirts'}><span className="mr-5 hover:text-gray-900">Tshirts</span></Link>
                        <Link href={'/hoodies'}><span className="mr-5 hover:text-gray-900">Hoodies</span></Link>

                        <Link href={'/stickers'}><span className="mr-5 hover:text-gray-900">Stickers</span></Link>

                        <Link href={'/mugs'}><span className="mr-5 hover:text-gray-900">Mugs</span></Link>
                    </nav>
                    <button
                        onClick={() => router.push('/signup')}
                    ><MdAccountCircle /></button>
                    <button className='mx-2'
                        onClick={() => setCartDrwer(!cartDrwer)}
                    ><AiOutlineShoppingCart /></button>
                </div>
            </div>
            {cartDrwer ? <div className='w-80 h-[100vh] absolute top-0 right-0 bg-pink-200 p-10 z-10'>
                <button
                    onClick={closeCart}
                    className='absolute top-2 right-2 text-pink-400'><AiFillCloseCircle /></button>
                <h4 className='font-bold text-center'>Shoping cart</h4>
                <ol className='list-decimal'>
                    {
                        Object.keys(cart).map((item, ind) => {
                            return <li key={ind}>
                                <div className='flex p-2'>
                                    <span>{cart[item].name}</span>
                                    <span className='flex mx-5 text-center items-center'>  <AiOutlineMinusCircle onClick={() => removeFromCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant)} className='mx-1' />{cart[item].qty}<AiOutlinePlusCircle onClick={() => addTOCart('slug', 1, 499, 'Tshirst', 'XL', 'red')} className='mx-1' /></span>
                                </div>
                            </li>
                        })
                    }

                </ol>
                <div className='flex'>
                    <Link href={'/checkout'}> <button onClick={() => setCartDrwer(!cartDrwer)} className="flex mx-auto mt-6 text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded"><IoIosBriefcase className='flex my-auto' />Checkout</button></Link>
                    <button onClick={() => { setCartDrwer(!cartDrwer); clearCart() }} className="flex mx-auto mt-6 text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded">Clear Cart</button>

                </div>
            </div> : ''}

        </div>
    )
}
