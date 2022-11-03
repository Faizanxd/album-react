import { useState, useEffect } from 'react'
import Content from './Content'
import Navbar from './Navbar';
import './index.css'


const App =()=> {
  const[Characters, setCharacters] = useState(null);
  const[Location, setLocation] = useState(null);
  const[Episodes, setEpisodes] = useState(null);
 
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCharacters(data)
      })
  }, [])

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/location')
    .then(res =>{
      return res.json();
    })
    .then(data =>{
      setLocation(data)
    })
  })

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/episode')
    .then(res =>{
      return res.json();
    })
    .then(data =>{
      setEpisodes(data)
    })
  })

 return (
    <div className='font-body'>
        <Navbar/>
       {Characters && <Content Characters={Characters} Location={Location} Episodes={Episodes}/>}
   </div>
    )
  }
export default App
