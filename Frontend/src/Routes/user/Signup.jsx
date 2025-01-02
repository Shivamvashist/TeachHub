import { useState } from 'react'

import {Outlet,Link} from 'react-router-dom'

export function UserSignup(){

    return <div>
        User Signup page!
        <LoginPage/>
    </div>
}

const LoginPage = () => {

  

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back to TeachHub!
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              
            />
            </label>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/user/signup" className="text-blue-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};
