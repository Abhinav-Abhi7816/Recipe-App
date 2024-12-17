import React, { useEffect, useState } from 'react'
import logo from './Images/clipart1129793.png'
import { NavLink } from 'react-router-dom'
import useDataContext from './Contexts/DataContext'
function NavBar() {

  const [srIn,SetSrIn]=useState("");

  const{setSearchItem,SearchItem}=useDataContext();
  function btnClick(e)
  {
    e.preventDefault();
    
    setSearchItem(srIn);
  }
  useEffect(()=>{
    console.log(SearchItem);
  },[SearchItem])
  
  return (
    <>
      <nav className='z-10 flex fixed bg-white h-24 w-[100%] justify-between place-items-center shadow-xl text-xl px-20' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3)" }}>
        <NavLink to={"/"}>
        <div className='flex text-4xl justify-between place-items-center gap-2 font-semibold' style={{ fontFamily: "Comic Sans MS" }}>
          <h1>RecipeApp</h1>
          <img src={logo} alt="" className='h-20' />
        </div>
        </NavLink>
        <div className='flex justify-between place-items-center gap-20'>
          <div className='flex overflow-hidden rounded-xl w-96 border ' style={{ boxShadow: "0px 0px 8px rgb(0,0,0,0.3)" }}>
            <form action="" onSubmit={(e)=>btnClick(e)}>
            <NavLink to={"/"}><input type="text" placeholder='Search Here...' onChange={(e)=>SetSrIn(e.target.value)} className='text-xl py-2 px-3 w-72 focus:outline-none' /></NavLink>

            </form>
            <button onClick={btnClick} className='bg-blue-400 font-semibold text-white px-5 hover:bg-blue-300 duration-300'>Search</button>
          </div>
          <ul className='flex gap-5 cursor-pointer font-semibold '>
            <li><NavLink to={"/"} className={({isActive})=>`${isActive ? "text-orange-700" : "text-gray-500 border-b-2 border-b-transparent hover:border-b-orange-700 duration-500" }`} >
            Home
            </NavLink></li>
            <li><NavLink to={"/favorites"} className={({isActive})=>`${isActive?"text-orange-700":"text-gray-500 border-b-2 border-b-transparent hover:border-b-orange-700 duration-500"}`}>
            Favorites
            </NavLink></li>
          </ul>
        </div>
      </nav></>
  )
}

export default NavBar
