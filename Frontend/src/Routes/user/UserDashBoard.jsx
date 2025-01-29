import { Link,useNavigate } from "react-router-dom"
import UserPng  from '../../assets/user.png'
import ShopPng from '../../assets/cart.png'
import LogoutPng from '../../assets/logout.png'
import { useState,useEffect } from "react"
import toast from 'react-hot-toast'
import Cookies from "js-cookie";
// import jwtDecode from 'jwt-decode';
// import * as jwt_decode from 'jwt-decode';

export function UserDashBoard() {

    return <div>
        <DashBoard />
        <Courses/>
    </div>

}

function DashBoard() {

    const [userClick,setUserClick] = useState(false);
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const [decoded , setDecoded] = useState("");

    const navigate = useNavigate();


    useEffect(()=>{

        try {
            const token = Cookies.get("token");
            if(token){
                setIsLoggedIn(true);
                const decodeJWT = (token) => {
                    const payload = token.split('.')[1]; // Get the payload part
                    return JSON.parse(atob(payload)); // Decode and parse it
                    
                };
    
                setDecoded(decodeJWT(token));
    
            } else if(!token){
                console.log(("No token"));
                const redirectToast = toast.error('invalid session!',{position:"bottom-right"});
                setTimeout(()=>{
                    navigate('/user/login');
                    toast.dismiss(redirectToast)
                },1500)
                
            }
    
        } catch(e){
            console.log("errorr given:" + e)
        }

    },[])
    

    

    // const decodedData = jwt_decode(token);
    // console.log(decodedData);
    //   const isLoggedIn = !!token; // Convert the token into a boolean

    function UserClickHandler() {
        setUserClick(v=>!v);
    }

    function logoutFn() {
        Cookies.remove("token");
        setIsLoggedIn(false);
        const logoutLoader = toast.loading('Logging out...',{position:"bottom-right"})
        setTimeout(()=>{
            navigate('/')
            toast.dismiss(logoutLoader);
            toast.success('Logged Out!',{position:"bottom-right"})

        },1000)
        
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
                        <button className=" w-full rounded-lg flex justify-center items-center gap-2 px-4 py-1 backdrop-blur-sm border border-gray-700" 
                            onClick={logoutFn}>
                            <img className="w-5 h-5 invert"src={LogoutPng}/>
                            log out
                        </button>
                    </div>
                </div>
            </header>
        </div>

        
        <div className="flex items-center">
            <div className="max-w-7xl w-full mx-auto">
                <p className=" font-roboto font-extrabold text-4xl px-4 md:px-16 xl:px-0 py-8">Welcome Back {isLoggedIn ? decoded.username : ""}!</p>
            </div> 
        </div>
    </div>
}

function Courses() {

    return <div>
        <div className="flex items-center">
            <div className="max-w-7xl w-full mx-auto">
                <p>Hi</p>

            </div>
        </div>
    </div>
}