const Searchbox=({Characters})=> {
  
  function searchValue(e){
  const searchValue = e.target.value.toLowerCase();
if(searchValue){
  cards.classList.add('hidden');
}
else
cards.classList.remove('hidden');


}


 

 return (
 
    <div className="m-6">
        <input type="text" placeholder="Search" className="w-[100%] btn-3" onChange={ searchValue } 
        />
    </div>
  
  )
  }
  

export default Searchbox 
