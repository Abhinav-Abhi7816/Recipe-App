import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GoHeartFill } from "react-icons/go";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import useDataContext from './Contexts/DataContext';


function Details() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { handleFav, favArr } = useDataContext();
  const { id } = useParams();
  useEffect(() => {
    async function getDetailedData() {
      try {
        setLoading(true);
        let response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

        let detailedData = await response.json();

        console.log(detailedData?.data?.recipe);
        setItem(detailedData?.data?.recipe);
        setLoading(false);

      }
      catch (e) {
        setLoading(false);
        console.log(e);
      }
    }
    getDetailedData();
  }, [id])

  if (loading) {
    return <div className='md:min-h-[650px] min-h-screen flex justify-center place-items-center font-mono md:text-3xl'>
      <h1 >Loading! Please Wait...</h1>
    </div>
  }
  if (!item) {
    return <p>Nothing Here...</p>
  }
  return (
    <div className='pt-28 min-h-[600px] md:px-16 px-1 mb-10 '>
      <div className='md:p-10 p-3 py-5 bg-slate-300 rounded-3xl'>
        <div className='bg-white  md:p-10 px-2 py-3 md:m-5 rounded-3xl shadow-2xl' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3)" }}>
          <div className='w-[100%] flex place-content-center text-lg md:text-3xl mb-5 font-semibold'><h1 className='border-b-2 border-b-black px-5 w-fit' style={{ fontFamily: "Comic Sans MS" }}>{item.title}</h1></div>
          <div className='flex flex-col md:flex-row justify-around md:pt-10'>
            <div className=' flex flex-col justify-center place-items-center'>
              <div className='flex  place-items-center md:pb-10 pb-4  h-fit w-fit' style={{ borderRadius: "50%", height: "75%", position: "center" }}>
                <img src={item.image_url} alt="item" className='md:h-[500px] md:w-[500px] h-[270px] w-[270px] shadow-2xl drop-shadow-xl' style={{ borderRadius: "50%", position: "center" }} />
              </div>
              <button onClick={() => handleFav(item)} className='md:text-2xl md:m-5 bg-[darkturquoise] hover:bg-[#61f3f6] hover:scale-105 duration-300 text-white font-semibold md:px-5 md:py-2 px-3 py-0.5 md:rounded-xl rounded-lg flex gap-2 justify-center place-items-center'>
                {(favArr.findIndex(ele => ele.id === item.id) === -1) ? "Add to Favorites" : "Remove from Favorites"}
                <GoHeartFill className={(favArr.findIndex(ele => ele.id === item.id) === -1) ? 'mt-1 fill-white size-5 md:size-8' : 'mt-1 fill-red-500 shadow-2xl drop-shadow-xl size-5 md:size-8'}  ></GoHeartFill></button>
              <p className='text-blue-700 md:text-xl text-xs m-1 font-thin'>Publisher : {item.publisher}</p>
            </div>

            <div className='max-w-[500px] px-2 text-wrap flex flex-col place-content-center'>
              <h1 className='md:text-2xl text-lg font-semibold'>Ingredients:</h1>
              <div className='flex flex-col gap-1'>
                {(item.ingredients.map((el, index) => (<div key={index}>
                  <div className='flex gap-1'>
                    <p className='md:text-xl flex gap-1 justify-start place-items-baseline '>{(el.quantity && el.unit && el.description) ? <BsFillBalloonHeartFill size={15}></BsFillBalloonHeartFill> : null}{(el.quantity && el.unit) ? `${el.quantity} ${el.unit} of ${(el.quantity && el.unit) ? el.description : el.description} ` : null}</p>
                  </div>
                </div>)))}
              </div>
              <div className='md:text-xl font-semibold my-5'>
                <p>Cooking Time : {item.cooking_time} min</p>
                <p>Servings : {item.servings}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
