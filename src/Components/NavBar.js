import React, { useEffect, useState } from 'react'
import logo from './Images/clipart1129793.png'
import { NavLink } from 'react-router-dom'
import useDataContext from './Contexts/DataContext'
import { CiSearch } from "react-icons/ci";
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
      <nav className='z-10  flex md:flex-row flex-col fixed bg-white p-2 gap-2 md:h-24 w-[100%] justify-between place-items-center shadow-xl text-xl md:px-20' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3)" }}>
        <NavLink to={"/"}>
        <div className='flex md:text-4xl text-xl justify-between place-items-center gap-2 font-semibold' style={{ fontFamily: "Comic Sans MS" }}>
          <h1>RecipeApp</h1>
          <img src={logo} alt="" className='h-8 md:h-20' />
        </div>
        </NavLink>
        <div className='flex justify-between place-items-center gap-4 md:gap-20'>
          <div className='flex overflow-hidden rounded-md md:rounded-xl w-48 md:w-96 border ' style={{ boxShadow: "0px 0px 8px rgb(0,0,0,0.3)" }}>
            <form action="" onSubmit={(e)=>btnClick(e)}>
            <NavLink to={"/"}><input type="text" placeholder='Search Here...' onChange={(e)=>SetSrIn(e.target.value)} className='md:text-xl text-base py-1  md:py-2 px-3 w-40 md:w-72 focus:outline-none' /></NavLink>

            </form>
            <button onClick={btnClick} className='bg-blue-400 md:hidden flex justify-center place-items-center w-fit px-1.5 hover:bg-blue-300 duration-300 text-white'><CiSearch></CiSearch></button>
            <button onClick={btnClick} className='bg-blue-400 invisible md:visible font-semibold text-white px-5 hover:bg-blue-300 duration-300'>Search</button>
          </div>
          <ul className='flex md:gap-5 gap-2 cursor-pointer font-semibold text-base md:text-xl'>
            <li><NavLink to={"/"} className={({isActive})=>`${isActive ? "text-orange-700" : "text-gray-500 md:border-b-2 border-b-transparent hover:border-b-orange-700 duration-500" }`} >
            Home
            </NavLink></li>
            <li><NavLink to={"/favorites"} className={({isActive})=>`${isActive?"text-orange-700":"text-gray-500  md:border-b-2 border-b-transparent hover:border-b-orange-700 duration-500"}`}>
            Favorites
            </NavLink></li>
          </ul>
        </div>
      </nav></>
  )
}

export default NavBar
