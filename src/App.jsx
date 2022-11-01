import { useState, useEffect } from 'react';
import AlbumsList  from './AlbumsList'
import './App.css'

const App =()=> {
  const [Albums, setAlbums] = useState(null);
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        return res.json();
      })
      .then(data => {
       setAlbums(data)
      })
  }, [])

 return (
    <div className="App">
       {Albums && <AlbumsList Albums={Albums}/>}
    </div>
  )
}




export default App
