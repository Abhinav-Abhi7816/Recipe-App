import React, { useState } from 'react'
import useDataContext from './Contexts/DataContext';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp() {
  const [fName,setFName]=useState('');
  const [lName,setLName]=useState('');
  const [email,setEmail]=useState('');
  const [user,setUser]=useState('');
  const [pass,setPass]=useState('');
  const [pass2,setPass2]=useState('');
  const [alertMess,setAlertMesss]=useState(false);

  const navigate=useNavigate();

  const {favArr}=useDataContext()
  async function signUpClick()
  {
    if(fName.trim()==='' || user.trim()==='' || pass.trim()==='' || pass2.trim()==='')
    {
      alert("fill all mandatory fields!");
      return;
    }
    if(pass!==pass2)
    {
      alert("passwords are not matching!");
      return;
    }
    const obj={
      name:fName+" "+lName,
      username:user,
      password:pass,
      email:email,
      favArr:favArr,
    }

    try{
      const response=await fetch('https://recipe-app-back-6ncp.onrender.com/signUp',{
        method:'POST',
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(obj)
      })
  
      if(response.status===200)
      {
        alert("SignUp successful! Login to your Account!");
        navigate('/login');
        setAlertMesss(false);
      }
      const result=await response.json();
      if(response.status===400)
      {
        alert(result.message);
        return;
      }
      if(response.status===404)
      {
        setAlertMesss(true);
      }
    }
    catch(err)
    {
      console.log(err);
    }

  }

  return (
    <div className='min-h-lvh md:pt-20 pt-12'>
      <div className="max-w-4xl max-sm:max-w-lg mx-auto font-[sans-serif] p-6">
        <div className='flex justify-center p-10 md:text-2xl text-base'>
          <h4 className="text-gray-600 mt-6 border-gray-600 border-b-4 w-fit px-5 text-nowrap">Sign up into your account</h4>
        </div>
        <form>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600 text-sm md:text-xl mb-2 block">First Name*</label>
              <input name="name" type="text" value={fName} onChange={(e)=>setFName(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm md:text-xl px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
            </div>
            <div>
              <label className="text-gray-600 text-sm md:text-xl mb-2 block">Last Name</label>
              <input name="lname" type="text" value={lName} onChange={(e)=>setLName(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm md:text-xl px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter last name" />
            </div>
            <div>
              <label className="text-gray-600 text-sm md:text-xl mb-2 block">Email Id</label>
              <input name="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm md:text-xl px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
            </div>
            <div>
              <label className="text-gray-600 text-sm md:text-xl mb-2 block">Username*</label>
              <input name="username" type="text" value={user} onChange={(e)=>setUser(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm md:text-xl px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter username" />
            </div>
            <div>
              <label className="text-gray-600 text-sm md:text-xl mb-2 block">Password*</label>
              <input name="password" type="password" value={pass} onChange={(e)=>setPass(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm md:text-xl px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
            </div>
            <div>
              <label className="text-gray-600 text-sm md:text-xl mb-2 block">Confirm Password*</label>
              <input name="cpassword" type="password" value={pass2} onChange={(e)=>setPass2(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm md:text-xl px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" />
            </div>
          </div>

          <div className="mt-8">
            <button type="button" onClick={signUpClick} className="mx-auto block py-3 px-6 text-sm md:text-xl tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Sign up
            </button>
          </div>

          <div className='flex justify-center place-items-center gap-4 p-5'>
              <p>Already have an account?</p>
              <NavLink to={'/login'} className={'text-blue-600 underline underline-offset-4'}>Login</NavLink>
          </div>
          {
            (alertMess)?<div className='text-xs text-center text-red-500'>
            <p>( Note: If not signing up wait for 20 sec and try again )</p>
          </div>:null
          }
          
        </form>
      </div>
    </div>
  )
}

export default SignUp
