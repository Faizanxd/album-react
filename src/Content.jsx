const Content =({ Characters })=>{
        
        return(
        <>
<div className="">
           <div className="flex justify-end">
                <button className="rounded-lg btn-2 m-2" id="previous-btn" onClick={handlePreviousClick}>Previous</button>
                <button className="rounded-lg btn-2 m-2 " id="next-btn" onClick={handleNextClick}>Next</button>
        </div>
        <div className="grid lg:grid-cols-4 place-items-center grid-cols-3">
       {Characters.results.map(item=>(
        <div className="border-2 card" key={item.id}>
                <img src={item.image} alt="" className=""/>
                <h3 className="font-bold text-2xl text-center">{item.name}</h3>
                {
                        status({Characters:item})
        
                }
        
                <div className="flex justify-center">
                  <button className="text-center w-[40%] btn">More </button>
                </div>
        </div>
        ))}
        
        </div>
</div>
</>

)}

const handleNextClick = ({Characters,setUrl}) => {
     setUrl(Characters.next)
}

const handlePreviousClick = ({Characters,setUrl}) => {
        setUrl(Characters.prev)
}

const status =({ Characters })=>{
        if(Characters.status === "Alive"){
                return(
                        <h2 className="text-center text-lime-800 font-bold text-2xl">{Characters.status}</h2>
                )
        }
        else if(Characters.status === "Dead"){
                return(
                        <h2 className="text-center text-red-800 font-bold text-2xl">{Characters.status}</h2>
                )
        }
        else{
                return(
                        <h2 className="text-center text-yellow-800 font-bold text-2xl">{Characters.status}</h2>
                )
        }
}

export default Content