import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Favorites from './Components/Favorites';
import Details from './Components/Details';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='favorites' element={<Favorites></Favorites>}></Route>
      <Route path='details/:id' element={<Details></Details>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signUp' element={<SignUp></SignUp>}></Route>
    </Route>
  ),
  { basename: '/Recipe-App' }
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
     <RouterProvider router={router}></RouterProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();