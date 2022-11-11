import { handleSearchxd } from "./Searchbox"

const Navbar = () => {
   return (
    <div className="shadow-md w-full sticky top-0 left-0" onClick={handleSearchxd}>
        <div className="flex bg-white py-2 md:pr-10 pr-7 items-center justify-between">
          <div className="cursor-pointer flex item-center w-[5%] h-[5%]">
             <a href="/">
                  <img src="https://i.etsystatic.com/24961489/r/il/a46e82/2636191477/il_340x270.2636191477_8khh.jpg" 
                  alt="https://oladino.com/wp-content/uploads/2022/02/Rick-and-Morty-Open-Your-Eyes-Morty-Svg-TB10222038-300x300.png" 
                  className="pt-2"/>
                  </a>
                  </div>
            <ul className="md:flex md:items-center">
                 <li className="">
                  <a href="https://rickandmortyapi.com/api/character" className="btn">
                    About
                  </a>
                  </li>
            </ul>
            </div>
         </div>
  )
}
export default Navbar