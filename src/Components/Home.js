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
    return <div className='min-h-[650px] flex justify-center place-items-center font-mono text-3xl'>
      <h1 >Loading! Please Wait...</h1>
    </div>
  }
  return (
    <div className='min-h-[600px]'>
      <div className='pt-32'>
        {(recipesArr && recipesArr.length > 0) ? <h1 className='w-[100%] font-semibold text-center text-2xl underline underline-offset-8' style={{ textShadow: "2px 4px 20px rgb(0,0,0,0.3)" }}>{title} Recipies</h1> : null}
        <div className='flex flex-wrap justify-around  gap-10 p-8'>
          {(recipesArr && recipesArr.length > 0) ? recipesArr.map((el, index) => (<div className='bg-white overflow-hidden rounded-2xl w-96 py-8 flex flex-col justify-center place-items-center hover:scale-105 duration-500 hover:drop-shadow-2xl' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3)" }} key={index}>
            <div>
              <img src={el.image_url} alt={el.title} className='w-80 h-56 rounded-xl' />
            </div>
            <div className='w-80 m-3'>
              <p className='text-cyan-600 font-semibold'>{el.publisher}</p>
              <p className='text-lg font-semibold'>{el.title}</p>
            </div>
            <div className='w-80 flex place-items-center justify-between'>
              <NavLink to={`details/${el.id}`}><button className='bg-black text-white font-semibold px-5 py-2 rounded-lg flex justify-center place-items-center gap-2 hover:bg-[rgb(86,83,83)] duration-300'>Recipe Details<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></button></NavLink>
              
              {(favArr.findIndex((elem)=>elem.id===el.id)===-1)?null:<NavLink to={'/favorites'}><GoHeartFill size={35} className="fill-red-500 hover:fill-red-400 hover:scale-110 duration-300"></GoHeartFill></NavLink>}
            </div>

          </div>)) : ((SearchItem && SearchItem.trim() !== '') ? (<p className=' font-semibold text-2xl'>Couldn't Find It ! Please Try Another...</p>) : (<p className='min-h-[500px] flex justify-center place-items-center text-3xl'>Search Something to get Recipe...</p>))}
        </div>
      </div>
    </div>
  )
}

export default Home
