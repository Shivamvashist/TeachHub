import Blob1 from "../../assets/blobs homepage/blob1.svg"
import Blob2 from "../../assets/blobs homepage/blob2.svg"
import Blob3 from "../../assets/blobs homepage/blob3.svg"
import { Link } from "react-router-dom"

export function UserLogin(){

    return <div>
        <Login />
    </div>
}

function Login() {
    return <div>
        <div className="relative h-[80vh] flex items-center justify-center">
            <img className="absolute scale-125 -z-10 blur-md" src={Blob2}/>
            <div className="w-full bg-slate-600 bg-opacity-10 max-w-md p-8 rounded-lg backdrop-blur-3xl ">

                <p className="font-roboto text-center text-3xl mb-8 "> Welcome to <span className=' font-bold text-sky-300 '>TeachHub</span> </p>

                <form className="flex flex-col gap-4 ">

                    <div>
                        <label className="block font-medium text-gray-400">
                            Username
                            <input className="w-full rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            type="text" 
                            required placeholder="Enter your username"
                            
                            />

                        </label>
                    </div>

                    <div>
                        <label className="block font-medium text-gray-400 ">
                            Password
                            <input className="w-full rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 " 
                            type="password" 
                            required placeholder="Enter your password"/>
                        </label>
                    </div>

                    <div>
                        <button className="bg-blue-500 py-2 w-full rounded-md  text-white mt-4 hover:bg-blue-600 transition duration-300">
                            Submit
                        </button>
                    </div>

                </form>
                <p className="text-center text-gray-500 text-sm mt-4">
                    Don't have an account?{" "}
                    <Link to="/user/signup" className="text-blue-500 hover:underline">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    </div>
}