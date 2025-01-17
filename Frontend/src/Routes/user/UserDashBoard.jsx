import { Link } from "react-router-dom"
import UserPng  from '../../assets/user.png'
import ShopPng from '../../assets/cart.png'
import LogoutPng from '../../assets/logout.png'
import { useState,useEffect } from "react"
import toast from 'react-hot-toast'

export function UserDashBoard() {

    return <div>
        <DashBoard />
    </div>

}

function DashBoard() {

    const [userClick,setUserClick] = useState(false);

    function UserClickHandler(){
        setUserClick(v=>!v);
        toast.success('Successfully toasted!')
    }

    return <div>
        <div className="border-b h-24 border-gray-700 items-center px-4 md:px-16 ">
        <header className=" h-24 max-w-7xl border-gray-700 flex items-center mx-auto justify-between">
            <div>
                <Link to={'/'}> <p className='font-roboto text-4xl font-bold text-sky-300 hover:text-sky-200'>TeachHub</p> </Link> 
            </div>
            <div className="relative flex gap-8 ">
                <Link to={'/courses'}><img className="w-12 hover:scale-110 transition-all ease-out " src={ShopPng} /></Link>
                <img className="w-12 hover:scale-110 transition-all ease-out" src={UserPng}  onClick={UserClickHandler}/>
                <div className={`absolute flex justify-center items-center -right-2 top-14 h-8 rounded-lg transition-opacity ease-in-out ${userClick? '' : 'opacity-0 pointer-events-none'}`} >
                    <button className=" w-full rounded-lg flex justify-center items-center gap-2 px-4 py-1 backdrop-blur-sm border border-gray-700">
                        <img className="w-5 h-5 invert"src={LogoutPng}/>
                        log out
                    </button>
                </div>
            </div>
        </header>
        </div>

        
        <hero className="flex items-center ">
            <div className="max-w-7xl w-full mx-auto ">
                <p className=" font-roboto font-extrabold text-4xl px-4 md:px-16 xl:px-0 py-8">Welcome Back Shivam!</p>
            </div> 
            
        </hero>
    </div>
}
