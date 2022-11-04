import { useState, useEffect } from 'react'
import Content from './Content'
import Navbar from './Navbar';
import './index.css'


const App =()=> {
  const[Characters, setCharacters] = useState(null);

 
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCharacters(data)
      })
  }, [])

 return (
    <div className='font-body'>
        <Navbar/>
       {Characters && <Content Characters={Characters} />}
   </div>
    )
  }
export default App
