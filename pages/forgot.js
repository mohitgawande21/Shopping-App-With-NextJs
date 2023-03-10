import React from 'react'

export default function forgot() {
    return (
        <div class="flex min-h-full items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Forgot Your Password</h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div class="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm" placeholder="Email address" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
