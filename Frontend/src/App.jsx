import { useState } from 'react'



function App() {
  
  return <div>

    <div className='w-[100vw] h-32 bg-[#f6d992] flex justify-center text-xl' >
      TeachHub
      <Header />
    </div>
    
  </div>
}

function Header(){
  
  return <div>
    <p className='font-roboto '>
      <span className='font-satisfy text-3xl'>T</span>each<span className='font-satisfy text-3xl'>H</span>ub
    </p>
  </div>
 
}


export default App