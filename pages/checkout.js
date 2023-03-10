import React from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
export default function checkout({ clearCart, cart, removeFromCart, addTOCart, subTotal }) {

  return (
    <>
      <h4 className='font-bold text-center'>Checkout</h4>
      <h5 className='font-bold text-center'> Delivery Details</h5>
      <form className='flex justify-center flex-col w-[80vh]  m-auto'>
        <label htmlFor="name">Name</label>
        <input type='text' id='name' className='border-2' />
        <label htmlFor="email">Email</label>
        <input type='email' id='email' className='border-2' />
        <label htmlFor="address">Address</label>
        <textarea id='address' className='border-2' />
        <label htmlFor="Phone">Phone</label>
        <input type='phone' id='Phone' className='border-2' />
        <label htmlFor="City">City</label>
        <input type='text' id='City' className='border-2' />
        <label htmlFor="State">State</label>
        <input type='text' id='State' className='border-2' />
        <label htmlFor="PinCode">PinCode</label>
        <input type='number' id='PinCode' className='border-2' />
      </form>


      <div className=' bg-pink-200 p-10  flex justify-center flex-col w-[80vh]  m-auto my-1' >
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
        <strong>SubTotal : ₹{subTotal}</strong>
        <div className='flex'>
          <button className="flex mx-auto mt-6 text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded">Pay: ₹{subTotal} </button>
        </div>
      </div>
    </>
  )
}

