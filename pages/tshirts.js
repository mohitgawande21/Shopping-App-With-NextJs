import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Product from './../models/Product'
export async function getServerSideProps() {
   // const res = await fetch('http://localhost:3000/api/getproducts')
   const res = await Product.find()
   // let products = await res.json()
   let products = await JSON.parse(JSON.stringify(res))
   // products = await products.products.filter((item) => (item.catagory == 'mug') && item)
   products = await products.filter((item) => (item.catagory == 'tshirts') && item)

  return {
    props: {
      products,
    },
  }
}

export default function tshirts({ products }) {

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              products.map((item) => {
                return (
                  <Link passHref={true} href={`/products/${item.slug}`} key={item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full" >
                    <div >
                      <div className="block relative h-50 rounded overflow-hidden max-w-lg max-h-96">
                        <LazyLoadImage alt="ecommerce" className="object-cover object-center w-full h-full block" src={`${item.img}`} />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.catagory}</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{item.desc}</h2>
                        <p className="mt-1">${item.price}</p>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}
