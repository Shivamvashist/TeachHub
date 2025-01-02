import Blob1 from "../../assets/blobs homepage/blob1.svg"
import Blob2 from "../../assets/blobs homepage/blob2.svg"
import Blob3 from "../../assets/blobs homepage/blob3.svg"

export function UserLogin(){

    return <div>
        <Login />
    </div>
}

function Login() {
    return <div>
        <div className="relative h-[80vh] flex items-center justify-center">
            <img className="absolute -z-10 blur-md" src={Blob2}/>
            <div className="w-full max-w-md p-8 rounded-lg backdrop-blur-3xl ">
                <form className="flex flex-col gap-4 ">

                    <div>
                        <label className="block font-medium text-gray-400">
                            Email
                            <input className="w-full rounded py-2 px-4" type="email" required placeholder="Enter your email"/>
                        </label>
                    </div>

                    <div>
                        <label className="block font-medium text-gray-400 ">
                            Password
                            <input className="w-full rounded py-2 px-4" type="text" required placeholder="Enter your password"/>
                        </label>
                    </div>

                    <div>
                        <button className="bg-blue-500 py-2 w-full rounded-md  text-white my-4 hover:bg-blue-600 transition duration-300">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
}