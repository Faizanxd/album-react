const Content =({ Characters })=>{
return(
        <>
<div className="">
        <div className="grid lg:grid-cols-4 place-items-center grid-cols-3">
       {Characters.results.map(item=>(
        <div className="border-2 card" key={item.id}>
                <img src={item.image} alt="" className=""/>
                <h3 className="font-bold text-2xl text-center">{item.name}</h3>
                <h2 className="text-center text-lime-800 font-bold text-xl">{item.status}</h2>
                <div className="flex justify-center">
                  <button className="text-center w-[40%] btn">More </button>
                </div>
        </div>
        ))}
        </div>
</div>
</>

)}

export default Content