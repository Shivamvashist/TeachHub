import {Outlet,Link} from 'react-router-dom'

export function Layout() {

    return <div>
      <p className='font-roboto '>
        <span className='font-satisfy text-9xl'>TeachHub</span>
      </p>
      <Header />
      <Outlet />
    </div>

}

function Header(){
  
    return <div>
        <div className='h-24 text-white flex gap-4 '>
            <Link to={'/'} >Home</Link>
            <Link to={'/courses'}>Courses</Link>
            <Link to={'/purchases'}>Purchases</Link>
            <Link to={'/aboutus'}>About us</Link>
        </div>
    </div>
}