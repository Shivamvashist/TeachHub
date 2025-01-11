import eye1 from '../../assets/pass/passShow.png'
import eye2 from '../../assets/pass/passHide.png'
import Blob2 from "../../assets/blobs homepage/blob2.svg"
import toast from 'react-hot-toast' 

import { Link } from "react-router-dom"
import {useState,useRef} from 'react'
import axios from 'axios'


export function UserLogin(){

    return <div>
        <Login />
    </div>
}

// function Toaster(){



//     return <div className={`{t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
//     <div className="flex-1 w-0 p-4">
//       <div className="flex items-start">
//         <div className="flex-shrink-0 pt-0.5">
//           <img
//             className="h-10 w-10 rounded-full"
//             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
//             alt=""
//           />
//         </div>
//         <div className="ml-3 flex-1">
//           <p className="text-sm font-medium text-gray-900">
//             Emilia Gates
//           </p>
//           <p className="mt-1 text-sm text-gray-500">
//             Sure! 8:30pm works great!
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="flex border-l border-gray-200">
//       <button
//         onClick={() => toast.dismiss(t.id)}
//         className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       >
//         Close
//       </button>
//     </div>
//   </div>

 
// }

function Login() {


    const [showPass,setShowPass] = useState('true');

    const usernameRef = useRef();
    const passRef = useRef();
  
    async function handleSubmit(e){
        e.preventDefault()

        const username = usernameRef.current.value;
        const password = passRef.current.value ;
        
        const submitData = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username:username,
            password:password
        })

        toast(submitData.data.msg)
        toast("hi")

    }

    function passHandler() {
      setShowPass(v=>!v)
  }

    return <div>
        <div className="relative h-[80vh] flex items-center justify-center">
            <img className="absolute scale-125 -z-10 blur-md" src={Blob2}/>
            <div className="w-full  max-w-md p-8 rounded-lg backdrop-blur-3xl ">

                <p className="font-roboto text-center text-3xl mb-8 "> Welcome to <span className=' font-bold text-sky-300 '>TeachHub</span> </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">

                    <div>
                        <label className="block font-medium text-gray-400">
                            Username
                            <input className="w-full rounded py-2 px-4 bg-[#11182071] text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            ref={usernameRef}
                            type="text" 
                            required placeholder="username"
                            
                            />

                        </label>
                    </div>

                    <div>
                        <label className="relative block font-medium text-gray-400 ">
                            Password
                            <input className="w-full rounded py-2 px-4 bg-[#11182071] text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            ref={passRef}
                            type={(showPass ? "password" : "text" )} required 
                            placeholder="••••••••">
                            </input>

                            <button type='button' onClick={passHandler} className='z-10 absolute top-8 right-2  bottom-6'><img className='h-[24px] object-contain ' src={( showPass ? eye2 : eye1)} /></button>
                        </label>
                    </div>

                    <div>
                        <button type='submit' className="bg-blue-500 py-2 w-full rounded-md  text-white mt-4 hover:bg-blue-600 transition duration-300">
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

