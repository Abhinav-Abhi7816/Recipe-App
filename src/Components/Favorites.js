import React from 'react'
import useDataContext from './Contexts/DataContext'
import { NavLink } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { GoHeartFill } from 'react-icons/go';

function Favorites() {

  const { favArr, handleFav } = useDataContext();
  return (
    <div className='md:min-h-[600px] min-h-screen'>
      <div className='md:pt-32 pt-24'>
        {(favArr && favArr.length > 0) ? <h1 className='w-[100%] font-semibold text-center md:text-2xl text-lg underline underline-offset-8' style={{ textShadow: "2px 4px 20px rgb(0,0,0,0.3)" }}>Favorite Recipies</h1> : null}
        <div className='flex flex-wrap justify-around gap-4 md:gap-10 pt-4 md:p-8'>
          {(favArr && favArr.length > 0) ? favArr.map((el, index) => (<div className='bg-white overflow-hidden rounded-2xl md:w-[450px] gap-3 w-[95%] md:py-8 py-4 px-4 flex flex-col justify-center place-items-center hover:scale-105 duration-500 hover:drop-shadow-2xl' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3)" }} key={index}>
            <div>
              <img src={el.image_url} alt={el.title} className='md:w-96 md:h-64 w-96 h-52 rounded-xl' />
            </div>
            <div className='md:w-96 w-[100%] m-3'>
              <p className='text-cyan-600 font-semibold md:text-lg text-sm'>{el.publisher}</p>
              <p className='md:text-lg text-base font-semibold'>{el.title}</p>
            </div>
            <div className='md:w-96 w-[100%] -mt-2 flex place-items-center justify-between'>
              <NavLink to={`/details/${el.id}`}><button onClick={() => console.log(el.id)} className='bg-black text-white text-sm md:text-lg font-semibold px-5 py-2 rounded-lg flex justify-center place-items-center gap-2 hover:bg-[rgb(86,83,83)] duration-300'>Recipe Details<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></button></NavLink>
            </div>
            <button onClick={() => handleFav(el)} className='md:text-xl md:w-[93%] w-[100%] m-2 bg-[darkturquoise] hover:bg-[#61f3f6] hover:scale-105 duration-300 text-white font-semibold md:px-5 md:py-2 py-0.5 rounded-xl flex gap-2 justify-center place-items-center'>
              {(favArr.findIndex(ele => ele.id === el.id) === -1) ? "Add to Favorites" : "Remove from Favorites"}
              <GoHeartFill className={(favArr.findIndex(ele => ele.id === el.id) === -1) ? 'mt-1 fill-white' : 'mt-1 fill-red-500 shadow-2xl drop-shadow-xl'} size={25} ></GoHeartFill></button>
          </div>)) : <p className='md:min-h-[500px] min-h-screen flex justify-center place-items-center md:text-3xl'>Add Some To Favorites...</p>}
        </div>
      </div>
    </div>
  )
}

export default Favorites
