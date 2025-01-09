import { useState,useRef } from 'react'

import eye1 from '../../assets/pass/passShow.png'
import eye2 from '../../assets/pass/passHide.png'
import Blob2 from "../../assets/blobs homepage/blob2.svg"
import {Link} from 'react-router-dom'
import axios from 'axios'

export function UserSignup(){

    return <div>
        <Signup />
    </div>
}


function Signup() {

    const [showPass,setShowPass] = useState('true');


    const usernameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

  function passHandler() {
    setShowPass(v=>!v)

}

 async function HandleSubmit(e) {



    e.preventDefault()

    console.log(emailRef.current.value)

    const email = emailRef.current.value;
    const username = usernameRef.current.value
    const password = passRef.current.value

   
    const data1 = await axios.post("http://localhost:3000/api/v1/user/signup",{
        email:email,
        username:username,
        password:password
    })

    alert(data1.data.msg)


  }


  return <div>
    <div className="relative h-[80vh] flex items-center justify-center">
            <img className="absolute scale-150 -z-10 blur-md opacity-60" src={Blob2}/>

            <img className="absolute translate-y-20 -translate-x-10 scale-150 opacity-60 -z-10 blur-md" src={Blob2}/>
            <div className="w-full  bg-opacity-10 max-w-md p-8 rounded-lg backdrop-blur-3xl ">

            <p className="font-roboto text-center text-3xl mb-8 "> Welcome to <span className=' font-bold text-sky-300 '>TeachHub</span> </p>

                <form onSubmit={HandleSubmit}  className="flex flex-col gap-4 ">

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
                        <label className="relative block font-medium text-gray-400 ">
                            Password
                            <input className="w-full rounded py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            ref={passRef}
                            type={(showPass ? "password" : "text" )} required 
                            placeholder="Enter your password">
                            </input>

                            <button type='button' onClick={passHandler} className='z-10 absolute top-8 right-2  bottom-6'><img className='h-[24px] object-contain ' src={( showPass ? eye2 : eye1)} /></button>
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
