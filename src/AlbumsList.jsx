

const AlbumsList =({ Albums })=>{
 
 return(
    <div>
        {Albums.map(item=>(
            <>
        <img src={item.thumbnailUrl} alt="" key={item.id} style={{
            width:'150px',
            height:'150px'
        }}/>
        <h3>{item.title} </h3>
        </>
        
    ))}
       </div>
)}

    export default AlbumsList