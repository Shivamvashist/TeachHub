import { useState,useRef } from 'react'

import Blob2 from "../../assets/blobs homepage/blob2.svg"
import {Link} from 'react-router-dom'

export function UserSignup(){

    return <div>
        <Signup />
    </div>
}




function Signup() {


  const usernameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

   function handleSubmit(e) {
    e.preventDefault()

    console.log(emailRef.current.value);
    // await axios.post("",)


  }


  return <div>
    <div className="relative h-[80vh] flex items-center justify-center">
            <img className="absolute scale-150 -z-10 blur-md" src={Blob2}/>

            <img className="absolute translate-y-20 -translate-x-10 scale-150 -z-10 blur-md" src={Blob2}/>
            <div className="w-full  bg-opacity-10 max-w-md p-8 rounded-lg backdrop-blur-3xl ">

            <p className="font-roboto text-center text-3xl mb-8 "> Welcome to <span className=' font-bold text-sky-300 '>TeachHub</span> </p>

                <form onSubmit={handleSubmit}  className="flex flex-col gap-4 ">

                    <div>
                        <label className="block font-medium text-gray-400">
                            Username
                            <input className="w-full rounded py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            ref={usernameRef}
                            type="text" required 
                            placeholder="Enter your username"/>
                        </label>
                    </div>
                    
                    <div>
                        <label className="block font-medium text-gray-400">
                            Email
                            <input className="w-full rounded py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            ref={emailRef}
                            type="email" required 
                            placeholder="Enter your email"/>
                        </label>
                    </div>

                    <div>
                        <label className="block font-medium text-gray-400 ">
                            Password
                            <input className="w-full rounded py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            ref={passRef}
                            type="password" required 
                            placeholder="Enter your password"/>
                        </label>
                    </div>
                
                    <div>
                        <button className="bg-blue-500 py-2 w-full rounded-md  text-white mt-4 hover:bg-blue-600 transition duration-300"
                        type="submit">
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
