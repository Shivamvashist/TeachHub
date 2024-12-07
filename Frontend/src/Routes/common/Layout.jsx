
import {Outlet,Link} from 'react-router-dom'
import menuSVG from '../../assets/menu.svg'

export function Layout() {

    return <div className='flex flex-col gap-20 items-center '>
      <Header />
      <Outlet />
    </div>

}


function Header(){
  
    return <div className='h-24  text-white flex gap-96 justify-center items-center '>
        <div className='h-24 xl:w-[1200px] lg:w-[1000px]  text-white flex justify-between items-center shadow-sm shadow-gray-400 rounded-3xl' >
          <div className='h-24 text-white flex gap-4 justify-start items-center  mx-7'>
            <div className='flex gap-4 justify-start items-baseline'>
              <Link to={'/'} ><p className='font-roboto text-3xl font-bold text-sky-300 hover:text-sky-200 mr-3'>TeachHub</p></Link>
              <Link to={'/courses'}>Courses</Link>
              <Link to={'/purchases'}>Purchases</Link>
              <Link to={'/aboutus'}>About us</Link>
            </div>
          </div>
          <div className='h-24 flex justify-end items-center mx-4'>
            <div className=' text-white flex gap-4 justify-end items-baseline mx-4 mt-3'>
              <Link to={'/user/signup'}>SignUp</Link>
              <Link to={'/user/login'}>Login</Link>
            </div>
          </div>
        </div>    
      </div>
    
}