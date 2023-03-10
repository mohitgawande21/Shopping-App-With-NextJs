import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function login() {
  const router = useRouter()
  useEffect(() => {
    console.log('render')
    if (localStorage.getItem("token")) {
      toast.info('Already LogedIn!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }
  }, [])
  const [useSignin, setUserSignin] = useState({
    email: '',
    password: "",
  })
  const OnChangeInputForm = (e) => {

    setUserSignin({
      ...useSignin,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      let res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(useSignin)

      });
      res = await res.json()
      if (res.success) {
        localStorage.setItem('token', res.token)
        toast.success('Successfully LogedIn!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.push('/')
        }, 1000)
      } else {
        toast.error(res.error, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      console.log('Error at LogedIn', err)
    }

    setUserSignin({
      email: '',
      password: "",
    })
  }

  return (
    <div className="flex min-h-full items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href={'/signup'}><span className="font-medium text-pink-600 hover:text-pink-500"> SignUp</span></Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={submitForm}>
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input value={useSignin.email} onChange={OnChangeInputForm} id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input value={useSignin.password} onChange={OnChangeInputForm} id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div className="text-sm">
              <Link href={'/forgot'}> <span className="font-medium text-pink-600 hover:text-pink-500">Forgot your password?</span></Link>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default  React.memo(login)