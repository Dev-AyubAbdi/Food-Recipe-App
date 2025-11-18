import { Link } from "react-router-dom"
export const Header = () => {
  return (
    <div className="">
     <div className="flex justify-around items-center shadow p-5">
       {/* logo */}
      <Link to={"/"} className="text-3xl font-semibold text-[#FF6F3C]">CookMate</Link>
      {/* navbar */}
      <nav className="flex gap-7  font-medium text-lg text-gray-800  pt-2">
        <Link to={"/home"} className="hover:text-[#FF6F3C]">Home</Link>
        <Link to={"/about"} className="hover:text-[#FF6F3C]">About</Link>
        <Link to={"/recipes"} className="hover:text-[#FF6F3C]">Recipes</Link>
        <Link to={"/contact"} className="hover:text-[#FF6F3C]">Contact</Link>
        
      </nav>
     </div>
    </div>
  )
}
