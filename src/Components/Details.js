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
    return <div className='min-h-[650px] flex justify-center place-items-center font-mono text-3xl'>
      <h1 >Loading! Please Wait...</h1>
    </div>
  }
  if (!item) {
    return <p>Nothing Here...</p>
  }
  return (
    <div className='pt-28 min-h-[600px] px-16 mb-10 '>
      <div className='p-10 bg-slate-300 rounded-3xl'>
        <div className='bg-white p-10 m-5 rounded-3xl shadow-2xl' style={{ boxShadow: "2px 4px 20px rgb(0,0,0,0.3)" }}>
          <div className='w-[100%] flex place-content-center text-3xl mb-5 font-semibold'><h1 className='border-b-2 border-b-black px-5 w-fit' style={{ fontFamily: "Comic Sans MS" }}>{item.title}</h1></div>
          <div className='flex justify-around pt-10'>
            <div className=' flex flex-col justify-center place-items-center'>
              <div className='flex place-items-center pb-10  h-fit w-fit' style={{ borderRadius: "50%", height: "75%", position: "center" }}>
                <img src={item.image_url} alt="item" className='h-[500px] w-[500px] shadow-2xl drop-shadow-xl' style={{ borderRadius: "50%", position: "center" }} />
              </div>
              <button onClick={() => handleFav(item)} className='text-2xl m-5 bg-[darkturquoise] hover:bg-[#61f3f6] hover:scale-105 duration-300 text-white font-semibold px-5 py-2 rounded-xl flex gap-2 justify-center place-items-center'>
                {(favArr.findIndex(ele => ele.id === item.id) === -1) ? "Add to Favorites" : "Remove from Favorites"}
                <GoHeartFill className={(favArr.findIndex(ele => ele.id === item.id) === -1) ? 'mt-1 fill-white' : 'mt-1 fill-red-500 shadow-2xl drop-shadow-xl'} size={30} ></GoHeartFill></button>
              <p className='text-blue-700 text-xl font-thin'>Publisher : {item.publisher}</p>
            </div>

            <div className='max-w-[500px] text-wrap flex flex-col place-content-center'>
              <h1 className='text-2xl font-semibold'>Ingredients:</h1>
              <div className='flex flex-col gap-1'>
                {(item.ingredients.map((el, index) => (<div key={index}>
                  <div className='flex gap-1'>
                    <p className='text-xl flex gap-1 justify-start place-items-baseline '>{(el.quantity && el.unit && el.description) ? <BsFillBalloonHeartFill size={15}></BsFillBalloonHeartFill> : null}{(el.quantity && el.unit) ? `${el.quantity} ${el.unit} of ${(el.quantity && el.unit) ? el.description : el.description} ` : null}</p>
                  </div>
                </div>)))}
              </div>
              <div className='text-xl font-semibold my-5'>
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
