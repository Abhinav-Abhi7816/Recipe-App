import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-slate-500 text-white w-[100%] text-center text-sm md:text-2xl p-1 md:p-3 font-bold'>
        <h1>Join Me</h1>
      </div>
      <div className='bg-slate-400 flex-wrap h-fit md:h-44 flex  justify-around font-bold text-white md:gap-20 gap-2 p-2 md:p-20 md:py-16'>
        <a href="https://www.instagram.com/abhinow_abhi_7816/" target='_blank' rel="noopener noreferrer"><h1 className='md:text-6xl text-lg'>Instagram</h1></a>
        <a href="https://github.com/Abhinav-Abhi7816" target='_blank' rel="noopener noreferrer"><h1 className='md:text-6xl text-lg'>Git-hub</h1></a>
        <a href="https://www.linkedin.com/in/abhinav-thonti-697125289/" target='"_blank' rel="noopener noreferrer"><h1 className='md:text-6xl text-lg'>Linked-In</h1></a>
        
        <a href="https://x.com/Abhinow_abhi?t=8s_ZB13wasu-ZywmV39a3Q&s=09" target='"_blank' rel="noopener noreferrer"><h1 className='md:text-6xl text-lg'>Twitter</h1></a>
      </div>
    </div>
  )
}

export default Footer
