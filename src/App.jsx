import { useState, useEffect } from 'react'
import Content from './Content'
import Navbar from './Navbar'
import './index.css'
// import { browerRouter as Router, Route, Switch } from 'react-router-dom'

const api = "https://rickandmortyapi.com/api/character"



const App =()=> {
  const[Characters, setCharacters] = useState(null);
  const [url, setUrl] = useState(api)
  
 
  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCharacters(data)
      })
  }, [])

 return (
    <div className='font-body'>
    {/* <Router>  */}
        <Navbar/>
        {Characters && <Content Characters={Characters} setUrl={setUrl}/>}
          {/* <Switch>
            <Route path='/'>
           <Content Characters={Characters} />
       </Route>
          </Switch>
      </Router> */}
   </div>
  
    )
}
export default App
