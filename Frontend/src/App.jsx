import { useState,useEffect } from 'react'
import { BrowserRouter,Routes,Route,Link, Outlet } from 'react-router-dom'
import { Homepage } from './HomePage'
import { Layout } from './Layout'
import { Course } from './Routes/common/Courses'

function App() {
  
  useEffect(()=>{
    document.body.classList.add('bg-[#111827]','text-white')
  },[])

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage/>}/>
          <Route path='/courses' element={<Course/>}/>
          <Route path='/purchases' element={<Homepage/>}/>
          <Route path='/aboutus' element={<Homepage/>}/>

          <Route path='/user/signup' element={<Homepage/>}/>
          <Route path='/user/login' element={<Homepage/>}/>
          <Route path='/admin/signup' element={<Homepage/>}/>
          <Route path='/admin/login' element={<Homepage/>}/>
          <Route path='/admin/createCourse' element={<Homepage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}


export default App