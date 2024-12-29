import React, { useEffect, useState } from 'react'
import useDataContext from './Contexts/DataContext'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { GoHeartFill } from 'react-icons/go';
function Home() {
  const { SearchItem, recipesArr, load,favArr } = useDataContext();
  const [title, setTitle] = useState('');


  useEffect(() => {
    let temp = SearchItem;
    let c = temp.charAt(0);
    c = c.toUpperCase();
    setTitle(c + ((temp.slice(1)).toLowerCase()));
  }, [SearchItem]);

  if (load) {
    return <div className='md:min-h-[650px] min-h-screen flex justify-center place-items-center font-mono md:text-3xl text-xl'>
      <h1 >Loading! Please Wait...</h1>
    </div>
  } 
  return (
    <div className='md:min-h-[600px] min-h-screen'>
      <div className='md:pt-32 pt-24'>
        {(recipesArr && recipesArr.length > 0) ? <h1 className='w-[100%] font-semibold text-center md:text-2xl text-lg underline underline-offset-8' style={{ textShadow: "2px 4px 20px rgb(0,0,0,0.3)" }}>{title} Recipies</h1> : null}
        <div className='flex flex-wrap justify-around md:gap-10 gap-4 pt-4 md:p-8'>
          {(recipesArr && recipesArr.length > 0) ? recipesArr.map((el, index) => (<div className='bg-white overflow-hidden rounded-2xl md:w-[450px] md:max-w-[450px] w-[95%] md:py-8  py-4 px-4 flex flex-col justify-center place-items-center hover:scale-105 duration-500 hover:drop-shadow-2xl' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3)" }} key={index}>
            <div>
              <img src={el.image_url} alt={el.title} className='md:w-96 md:h-64 w-96 h-52 rounded-xl' />
            </div>
            <div className='md:w-96 w-[100%] m-3'>
              <p className='text-cyan-600 font-semibold md:text-lg text-sm'>{el.publisher}</p>
              <p className='md:text-xl text-base font-semibold'>{el.title}</p>
            </div>
            <div className='md:w-96 w-[100%] -mt-2 md:mt-0 flex place-items-center justify-between'>
              <NavLink to={`details/${el.id}`}><button className='bg-black text-white text-sm md:text-lg font-semibold px-5 py-2 rounded-lg flex justify-center place-items-center gap-2 hover:bg-[rgb(86,83,83)] duration-300'>Recipe Details<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></button></NavLink>
              
              {(favArr.findIndex((elem)=>elem.id===el.id)===-1)?null:<NavLink to={'/favorites'}><GoHeartFill size={35} className="fill-red-500 hover:fill-red-400 hover:scale-110 duration-300"></GoHeartFill></NavLink>}
            </div>

          </div>)) : ((SearchItem && SearchItem.trim() !== '') ? (<p className=' font-semibold md:text-2xl'>Couldn't Find It ! Please Try Another...</p>) : (<p className='md:min-h-[500px] min-h-screen flex justify-center place-items-center md:text-3xl'>Search Something to get Recipe...</p>))}
        </div>
      </div>
    </div>
  )
}

export default Home
