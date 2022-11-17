import { useState, useEffect } from 'react'
import Content from './Content'
import Navbar from './Navbar'
import './index.css'
import Searchbox from './Searchbox'
import {  Routes,Route } from 'react-router-dom'
import Overlay from './Overlay'



const App =()=> {
  
  const[Characters, setCharacters] = useState(null);
   const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCharacters(data)
      })
  }, [url])

  const handleNextClick =()=>{
    setUrl(Characters.info.next);
     }
  
  const handlePreviousClick =()=>{
    setUrl(Characters.info.prev)
    }

  

 return (
    <div className='font-body'>
      
   <Routes>
    <Route path='/' element={[
    <Navbar/>,
    <Searchbox Characters={Characters} handleNextClick={handleNextClick}/>,
    Characters && <Content Characters={Characters} handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick}/>]}> 
    </Route>
  </Routes>
   </div>
  
    )
}

export default App
