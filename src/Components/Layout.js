import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { DataContextProvider } from './Contexts/DataContext'
import { useEffect, useState } from 'react'
function Layout() {

  const [recipesArr, setRecipesArr] = useState([]);
  const [SearchItem, setSearchItem] = useState('');
  const [favArr, setFavArr] = useState([])
  const [load, setLoad] = useState(false);
  const [logName,setLogName]=useState('');
  const navigate=useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        setLoad(true);
        let response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${SearchItem}`);

        let data = await response.json();

        setRecipesArr(data?.data?.recipes);
        setLoad(false);
      }
      catch (e) {
        setLoad(false);
        console.log(e);
      }
    }
    getData();
  }, [SearchItem]);

  function handleFav(element) {
    let tempArr = [...favArr];
    if (favArr.length === 0) {
      tempArr.push(element);
    }
    else {
      let k = -1;
      for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].id === element.id) {
          k = i;
        }
      }
      if (k === -1) {
        tempArr.push(element);
      }
      else {
        tempArr.splice(k, 1);
      }
    }
    
    setFavArr(tempArr);
    if(tempArr.length!==0 && tempArr.length%3===0)
        {
          if(localStorage.getItem('token')==='' || !localStorage.getItem('token'))
          {
            alert('Login or Signup to save permanently');
            navigate('/signUp');
            return;
          }
        }

  }

  return (
    <>
      <DataContextProvider value={{ recipesArr, setRecipesArr, SearchItem, setSearchItem, load, setLoad, favArr, setFavArr, handleFav,logName,setLogName }}>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </DataContextProvider>

      <Footer></Footer>
    </>
  )
}

export default Layout
