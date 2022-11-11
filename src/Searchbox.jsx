import React from "react";
import { useState } from "react";


const Searchbox=({Characters,handleNextClick})=> {
  const [query, setQuery] = useState('');
 
const handleSearchClick =()=>{
  cards.classList.add('hidden')
}

 

return (
 
    <div className="m-6">
        <input type="text" placeholder="Search" className="w-[100%] btn-3" 
        onChange={(e)=>setQuery(e.target.value)} onClick={handleSearchClick} />
        
        <div className="grid lg:grid-cols-4 place-items-center grid-cols-3">   
        
{query && Characters.results.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).map((item) => (
     <div className="border-2 card " key={item.id} >
     <img src={item.image} alt="" className=""/>
     <h3 className="font-bold text-2xl text-center" >{item.name}</h3>
    {status({Characters:item})}
    
     <div className="flex justify-center">
     <button className="text-center w-[40%] btn" id="overlay-btn">More </button>
     </div>
</div>

))}
    
   </div>
    </div>

)}

const status =({ Characters })=>{
  if(Characters.status === "Alive"){
          return(
                  <h2 className="text-center text-lime-800 font-bold text-xl">🟢{Characters.status}</h2>
          )
  }
  else if(Characters.status === "Dead"){
          return(
                  <h2 className="text-center text-red-800 font-bold text-xl">🔴{Characters.status}</h2>
          )
  }
  else{
          return(
                  <h2 className="text-center text-yellow-800 font-bold text-xl">🟡{Characters.status}</h2>
          )
  }
}
export const handleSearchxd =()=>{
  cards.classList.remove('hidden')
}

export default Searchbox 
