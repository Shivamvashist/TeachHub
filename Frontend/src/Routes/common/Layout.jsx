import { useState,useEffect } from "react"

import {Outlet,Link,useNavigate} from 'react-router-dom'
import menuSVG from '../../assets/menu.svg'
import UserPng  from '../../assets/user.png'
import ShopPng from '../../assets/cart.png'
import LogoutPng from '../../assets/logout.png'
import DashPng from '../../assets/dashboard.png'
import Cookies from "js-cookie";

import toast from 'react-hot-toast'; 

export function Layout() {

    return <div className='flex flex-col items-center '>
      <Header />
      <Outlet />
      <Footer />
    </div>

}


function Header(){

  const [isLoggedIn , setIsLoggedIn] = useState(false);


  useEffect(()=>{

      try {
          const token = Cookies.get("token");
          if(token){
              setIsLoggedIn(true);

          } else if(!token){
              console.log(("No token"));
              
          }
  
      } catch(e){
          console.log("errorr given:" + e)
      }

  },[])


    return <div className='fixed h-24  text-white flex gap-96 justify-center items-center z-30 '>
        <div className='h-24 xl:w-[1200px] lg:w-[1000px]  text-white flex justify-between items-center shadow-sm shadow-gray-700 backdrop-blur-sm rounded-3xl' >
          <div className='h-24 text-white flex gap-4 justify-start items-center   mx-7'>
            <div className='flex gap-4 justify-start items-baseline'>
              <Link to={'/'} ><p className='font-roboto text-3xl font-bold text-sky-300 hover:text-sky-200 mr-3'>TeachHub</p></Link>
              {/* <Link to={'/courses'}>Courses</Link>
              <Link to={'/purchases'}>Purchases</Link>
              <Link to={'/aboutus'}>About us</Link> */}
            </div>
          </div>
          <div className='h-24 flex justify-end items-center mx-4'>

            {isLoggedIn ? <AccountForHeader setIsLoggedIn={setIsLoggedIn}/> : <LoginForHeader/>}
            
          </div>
        </div>    
      </div>
}

function LoginForHeader() {

  return <div className=' text-white flex gap-4 justify-end items-baseline mx-4 mt-3'>


  <Link to={'/user/signup'}>
    <button className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600">
      SignUp
    </button>
  </Link>

  
<Link to={'/user/login'}>
  <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
    Login
  </button>
</Link>
  
</div>

}

function AccountForHeader({setIsLoggedIn}) {

  const navigate = useNavigate();
  const [userClick,setUserClick] = useState(false);

    function UserClickHandler(){
        setUserClick(v=>!v);
    }
    function logoutFn() {
      Cookies.remove("token");
      const logoutLoader = toast.loading('Logging out...',{position:"bottom-right"})
      setTimeout(()=>{
          navigate('/')
          toast.dismiss(logoutLoader);
          toast.success('Logged Out!',{position:"bottom-right"})
          setIsLoggedIn(false);
      },1000)
      
  }
  
  return <div className="relative flex gap-8 ">
    <Link to={'/courses'}><img className="w-12 hover:scale-110 transition-all ease-out " src={ShopPng} /></Link>
    <img className="w-12 hover:scale-110 transition-all ease-out" src={UserPng}  onClick={UserClickHandler}/>
    <div className={`absolute flex flex-col gap-2 justify-center items-center -right-2 top-16 h-20 rounded-lg transition-opacity ease-in-out border border-gray-700 ${userClick? '' : 'opacity-0 pointer-events-none'}`} >
        
        <button className=" w-full rounded-lg flex justify-center bg-inherit items-center gap-2 px-4 py-1 backdrop-blur-sm "
        onClick={()=>{navigate('/user/dashboard')}} >
            <img className="w-5 h-5 invert"src={DashPng}/>
            DashBoard
        </button>

        <button className=" w-full rounded-lg flex justify-evenly items-center gap-2 px-4 py-1 backdrop-blur-sm  "
        onClick={logoutFn} >
            <img className="w-5 h-5 invert"src={LogoutPng}/>
            log out
        </button>
        
    </div>
  </div>

}



function Footer(){
  return (
    <footer className=" text-gray-300 py-10 border-t border-gray-700">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">TeachHub</h2>
          <p className="text-sm">
            Empowering educators and learners worldwide. Join our platform to
            share knowledge and learn new skills.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/aboutus" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link  className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:underline">
                Browse Courses
              </Link>
            </li>
            <li>
              <Link to="/admin/signup" className="hover:underline">
                Become a Teacher
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link  className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link  className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to get the latest courses and deals right in your inbox.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="mt-2 w-full py-2 bg-blue-400 text-white rounded hover:bg-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} TeachHub. All rights reserved.</p>
        <p>Made with ❤️ by Shivam.</p>
      </div>
    </footer>
  );
};



