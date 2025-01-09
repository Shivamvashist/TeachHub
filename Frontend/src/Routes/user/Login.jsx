import eye1 from '../../assets/pass/passShow.png'
import eye2 from '../../assets/pass/passHide.png'
import Blob2 from "../../assets/blobs homepage/blob2.svg"

import { Link } from "react-router-dom"
import {useState,useRef} from 'react'


export function UserLogin(){

    return <div>
        <Login />
    </div>
}

function Login() {


    const [showPass,setShowPass] = useState('true');

    const usernameRef = useRef();
    const passRef = useRef();
  
    function passHandler() {
      setShowPass(v=>!v)
  }

    return <div>
        <div className="relative h-[80vh] flex items-center justify-center">
            <img className="absolute scale-125 -z-10 blur-md" src={Blob2}/>
            <div className="w-full  max-w-md p-8 rounded-lg backdrop-blur-3xl ">

                <p className="font-roboto text-center text-3xl mb-8 "> Welcome to <span className=' font-bold text-sky-300 '>TeachHub</span> </p>

                <form className="flex flex-col gap-4 ">

                    <div>
                        <label className="block font-medium text-gray-400">
                            Username
                            <input className="w-full rounded py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            ref={usernameRef}
                            type="text" 
                            required placeholder="Enter your username"
                            
                            />

                        </label>
                    </div>

                    <div>
                        <label className="relative block font-medium text-gray-400 ">
                            Password
                            <input className="w-full rounded py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            ref={passRef}
                            type={(showPass ? "password" : "text" )} required 
                            placeholder="Enter your password">
                            </input>

                            <button onClick={passHandler} className='z-10 absolute top-8 right-2  bottom-6'><img className='h-[24px] object-contain ' src={( showPass ? eye2 : eye1)} /></button>
                        </label>
                    </div>

                    <div>
                        <button className="bg-blue-500 py-2 w-full rounded-md  text-white mt-4 hover:bg-blue-600 transition duration-300">
                            Submit
                        </button>
                    </div>

                </form>
                <p className="text-center text-gray-500 text-sm mt-4">
                    Don&apos;t have an account?{" "}
                    <Link to="/user/signup" className="text-blue-500 hover:underline">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    </div>
}