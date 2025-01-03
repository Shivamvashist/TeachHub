import { useState } from 'react'
import Blob1 from "../../assets/blobs homepage/blob1.svg"
import Blob2 from "../../assets/blobs homepage/blob2.svg"
import Blob3 from "../../assets/blobs homepage/blob3.svg"
import {Outlet,Link} from 'react-router-dom'

export function UserSignup(){

    return <div>
        <Signup />
    </div>
}

function Signup() {

  return <div>
    <div className="relative h-[80vh] flex items-center justify-center">
            <img className="absolute scale-150 -z-10 blur-md" src={Blob2}/>
            <div className="w-full bg-slate-600 bg-opacity-10 max-w-md p-8 rounded-lg backdrop-blur-3xl ">

            <p className="font-roboto text-center text-3xl mb-8 "> Welcome to <span className=' font-bold text-sky-300 '>TeachHub</span> </p>

                <form className="flex flex-col gap-4 ">

                    <div>
                        <label className="block font-medium text-gray-400">
                            Username
                            <input className="w-full rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" required placeholder="Enter your username"/>
                        </label>
                    </div>
                    
                    <div>
                        <label className="block font-medium text-gray-400">
                            Email
                            <input className="w-full rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" required placeholder="Enter your email"/>
                        </label>
                    </div>

                    <div>
                        <label className="block font-medium text-gray-400 ">
                            Password
                            <input className="w-full rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" required placeholder="Enter your password"/>
                        </label>
                    </div>

                    <div>
                        <button className="bg-blue-500 py-2 w-full rounded-md  text-white mt-4 hover:bg-blue-600 transition duration-300">
                            Submit
                        </button>
                    </div>

                </form>
                <p className="text-center text-gray-500 text-sm mt-4">
                    Already have an account?{" "}
                    <Link to="/user/login" className="text-blue-500 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
  </div>

}


const LoginPage1 = () => {

  

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
