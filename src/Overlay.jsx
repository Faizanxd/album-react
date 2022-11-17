import React from 'react'
import  ReactDom from 'react-dom'
import { useState } from 'react'

 const Overlay = ({Characters,open,onClose}) => {
 if(!open) return null

  return ReactDom.createPortal(
    <>
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-slate-300 via-gray-400 to-neutral-500"/>
    <div className='overlay-styles bg-white'>
      <div className='grid grid-cols-2 font-body'>
        {Characters.results.filter((item)=>item.id === 3).map((item)=>(
          <>
          <div className='col-span-1'>
            <img src={item.image} alt="" className="card"/>
    </div>
    <div className=''>
      <h3 className="font-bold text-4xl text-center m-6">{item.name}</h3>
      <ul className='list-disc'>
      <li className="font-semibold text-2xl text-center m-4 ">{item.species}</li>
      <li className="font-semibold text-2xl text-center m-4 ">{item.gender}</li>
      <li className="font-semibold text-2xl text-center m-4 ">{item.origin.name}</li>
      {status({Characters:item})}
      <li className="font-semibold text-2xl text-center m-4 ">{item.location.name}</li>
      <li className="font-semibold text-2xl text-center m-4 ">{item.episode.length}</li>
      </ul>
     </div>
    </>
           ))}
           <div className='flex justify-end '>
           <button onClick={onClose} className="btn-4">X</button>
           </div>
          
     </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}

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


export default Overlay