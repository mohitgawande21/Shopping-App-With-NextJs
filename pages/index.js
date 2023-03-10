import Head from 'next/head'


export default function Home() {
  return (
    <div >
      <Head>
        <title>CodesWear.com - Wear The Code</title>
        <meta name="description" content="codeswear.com - wear the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='absolute left-40 mx-20'>
        <h3 className='text-xl font-bold font-wi text-center p-5 text-black-600' >Welcome To CodesWear - Wear The Code</h3>
        <p className='text-center p-5 font-mono'>We delever the best printend tshirts, mugs, sticker and Hoodies....</p>
      </div>

      <div className='mx-10' >
        <img  style={{'height':'800px',"width":'100%'}}  src='home.jpg' alt='Home Page' />
      </div>
    </div>
  )
}