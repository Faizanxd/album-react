        const Content =({ Characters,handleNextClick,handlePreviousClick })=>{
        return(
                <>
                <div className="" id="cards" >
                        <div className="flex justify-end">
                        {previousButton({Characters,handlePreviousClick})}
                                        <button className="rounded-lg btn-2 m-2 " id="next-btn" onClick={handleNextClick}>Next</button>
                                </div>
                          <div className="grid lg:grid-cols-4 place-items-center grid-cols-3">
                        {Characters.results.map(item=>(
                                <>
                                <div className="border-2 card" key={item.id} >
                                        <img src={item.image} alt="" className=""/>
                                        <h3 className="font-bold text-2xl text-center" >{item.name}</h3>
                                        {status({Characters:item})}
                                <div className="flex justify-center">
                                        <button className="text-center w-[40%] btn" id="overlay-btn " >More </button>
                                        </div>
                                </div>
                                
                                </>
                        ))}
                        
                </div>
        </div>
        </>

        )}

        const previousButton =({Characters,handlePreviousClick})=>{
                if(Characters.info.prev === null){
                        return(
                              ['']
                        )
                }
                else{
        
                        return(
                                <button className="rounded-lg btn-2 m-2 " id="previous-btn" onClick={handlePreviousClick}>Previous</button>
                        )
                        }
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
       


     

      
        

        export default Content