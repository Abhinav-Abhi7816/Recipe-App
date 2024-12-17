import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-slate-500 text-white w-[100%] text-center text-2xl p-3 font-bold'>
        <h1>Join Me</h1>
      </div>
      <div className='bg-slate-400 h-44 flex flex-wrap justify-around font-bold text-white gap-20 p-20 py-16'>
        <a href="https://www.instagram.com/abhinow_abhi_7816/" target='_blank' rel="noopener noreferrer"><h1 className='text-6xl'>Instagram</h1></a>
        <a href="https://github.com/Abhinav-Abhi7816" target='_blank' rel="noopener noreferrer"><h1 className='text-6xl'>Git-hub</h1></a>
        <a href="https://www.linkedin.com/in/abhinav-thonti-697125289/" target='"_blank' rel="noopener noreferrer"><h1 className='text-6xl'>Linked-In</h1></a>
        
        <a href="https://x.com/Abhinow_abhi?t=8s_ZB13wasu-ZywmV39a3Q&s=09" target='"_blank' rel="noopener noreferrer"><h1 className='text-6xl'>Twitter</h1></a>
      </div>
    </div>
  )
}

export default Footer
