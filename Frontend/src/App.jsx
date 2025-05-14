import { useEffect } from 'react'
import { BrowserRouter,Routes,Route,Link,Outlet } from 'react-router-dom'
import { Homepage } from './Routes/common/HomePage'
import { Layout } from './Routes/common/Layout'
import { Course } from './Routes/common/Courses'
import { About } from './Routes/common/About'
import { Purchase } from './Routes/common/Purchases'
import { Admin } from './Routes/admin/Admin'
import { UserSignup } from './Routes/user/Signup'
import { UserLogin } from './Routes/user/Login'
import { UserDashBoard } from './Routes/user/UserDashBoard'
import {Toaster} from 'react-hot-toast'

function App() {
  
  useEffect(()=>{
    document.body.classList.add('bg-[#111827]','text-white')
  },[])

  return <div>
    <Toaster/>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
        
          <Route index element={<Homepage/>}/>
          <Route path='/courses' element={<Course/>}/>
          <Route path='/purchases' element={<Purchase/>}/>
          <Route path='/aboutus' element={<About/>}/>

          <Route path='/user/signup' element={<UserSignup/>}/>
          <Route path='/user/login' element={<UserLogin/>}/>

          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/signup' element={<Homepage/>}/>
          <Route path='/admin/login' element={<Homepage/>}/>
          <Route path='/admin/createCourse' element={<Homepage/>}/>

        </Route>
        
        <Route path='/user/dashboard' element={<UserDashBoard />}>

        </Route>

      </Routes>

    </BrowserRouter>
  </div>
}


export default App