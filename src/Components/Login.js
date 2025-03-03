import React, { useState } from 'react'
import useDataContext from './Contexts/DataContext'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [alertMess,setAlertMesss]=useState(false);

  const { favArr, setFavArr, setLogName } = useDataContext()
  const navigate = useNavigate();

  const loginClick = async () => {
    if (user.trim() === '' || pass.trim() === '') {
      alert('Fill all the fields');
      return;
    }
    const obj = {
      username: user,
      password: pass,
      sentArr: favArr
    }
    try {
      const response = await fetch('https://recipe-app-back-6ncp.onrender.com/login', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      const result = await response.json();
      if (response.status === 400) {
        alert(result.message);
        return;
      }
      if (response.status === 500) {
        alert('Internal server error!');
        return;
      }
      if (response.status === 200) {
        setFavArr(result.array);
        localStorage.setItem('token', result.token);
        let lNm = result.logName.split(' ')[0];
        localStorage.setItem('logName', lNm);
        setLogName(lNm);
        setAlertMesss(false);
        navigate('/');
        return;
      }
      if(response.status===404)
      {
        setAlertMesss(true);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='min-h-lvh md:pt-20 pt-12'>
      <div className="max-w-[500px] mx-auto font-[sans-serif] p-6">
        <div className='flex justify-center p-10 md:text-2xl text-base'>
          <h4 className="text-gray-600 mt-6 border-gray-600 border-b-4 w-fit px-5 text-nowrap">Log-in to your account</h4>
        </div>
        <form>
          <div className="grid sm:grid-cols-1 gap-6">
            <div>
              <label className="text-gray-600 text-sm md:text-xl mb-2 block">Username</label>
              <input name="username" type="text" value={user} onChange={(e) => setUser(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm md:text-xl px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter username" />
            </div>
            <div>
              <label className="text-gray-600 text-sm md:text-xl mb-2 block">Password</label>
              <input name="password" type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm md:text-xl px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
            </div>
          </div>
          <div className="mt-8">
            <button type="button" onClick={loginClick} className="mx-auto block py-3 px-6 text-sm md:text-xl tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Log in
            </button>
          </div>
          <div className='flex justify-center place-items-center gap-4 p-5'>
            <p>Didn't have an account?</p>
            <NavLink to={'/signUp'} className={'text-blue-600 underline underline-offset-4'}>SignUp</NavLink>
          </div>
          {
            (alertMess)?<div className='text-xs text-center text-red-500'>
            <p>( Note: If not loging in wait for 20 sec and try again )</p>
          </div>:null
          }
        </form>
      </div>
    </div>
  )
}

export default Login
