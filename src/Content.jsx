const Content =({ Characters,Location,Episodes })=>{
return(
<div>
       {Characters.results.map(item=>(
        <h3>{item.name}</h3>
        ))}
</div>

)}

export default Content