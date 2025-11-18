import { Link } from "react-router-dom"
import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="">
     <div className="flex justify-around items-center shadow p-5">
       {/* logo */}
      <Link to={"/"} className="text-3xl font-semibold text-[#FF6F3C]">CookMate</Link>
      {/* navbar */}
      <nav className="hidden sm:flex gap-7  font-medium text-lg text-gray-800  pt-2">
        <Link to={"/home"} className="hover:text-[#FF6F3C]">Home</Link>
        <Link to={"/about"} className="hover:text-[#FF6F3C]">About</Link>
        <Link to={"/recipes"} className="hover:text-[#FF6F3C]">Recipes</Link>
        <Link to={"/contact"} className="hover:text-[#FF6F3C]">Contact</Link>
      </nav>
      <div className="sm:hidden">
        <button onClick={()=> setIsMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen ? ( <IoMdClose className="block w-6 h-6" />
) :  <CiMenuBurger className="block w-6 h-6" />

          }
        </button>
      </div>
      
     </div>
     {
        isMenuOpen && (
         <div  className=" bg-white shadow h-fit flex flex-col  justify-center text-center gap-5 mt-3">
         <Link to={"/home"} className="hover:text-[#FF6F3C] hover:bg-amber-300 p-2">Home</Link>
        <Link to={"/about"} className="hover:text-[#FF6F3C] hover:bg-amber-300 p-2">About</Link>
        <Link to={"/recipes"} className="hover:text-[#FF6F3C] hover:bg-amber-300 p-2">Recipes</Link>
        <Link to={"/contact"} className="hover:text-[#FF6F3C] hover:bg-amber-300 p-2">Contact</Link>
         </div>
        )
      }
     
    </div>
  )
}
