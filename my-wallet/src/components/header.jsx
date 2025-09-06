import { useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'

function Head () {

  const navigator = [
    {text: 'home',  id: 'nav1'},
    {text: 'assets',  id: 'nav2'},
    {text: 'send/recieve',  id: 'nav3'},
    {text: 'history',  id: 'nav3'},
    {text: 'settings',  id: 'nav3'}
  ]

  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }


  return (
    <div> 
      <div className="hidden md:flex justify-between text-amber-100 uppercase fixed top-0 left-0 right-0 h-14 bg-emerald-900 items-center text-center p-5  ">
        <h1 className ="uppercase bg-white text-black rounded-sm p-[0.2rem] font-bold h-fit cursor-pointer ">hm wallet</h1>
        <div className="flex flex-row justify-between align-middle w-1/2 text-[0.5rem] font-bold">
          {navigator.map (navBar => (
            <div key = {navBar.id} className = "cursor-pointer" >{navBar.text} </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col fixed top-0 left-0 h-[42%] w-full md:hidden transition duration-300 ease-in-out " >
        <div className ="flex flex-row justify-between text-amber-100 uppercase bg-emerald-900 items-center text-center p-5  ">
          <h1 className ="uppercase bg-white text-black rounded-sm p-[0.2rem] font-bold w-fit h-fit cursor-pointer  ">hm wallet</h1>
          <div className="text-sm cursor-pointer top-3 right-3 bg-emerald-900 p-2 rounded-sm" onClick={toggleMenu}>
          {menu ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <div className={menu?"flex flex-col justify-between align-middle text-[0.57rem] font-bold w-[25%] text-amber-100 uppercase bg-emerald-900 items-start p-5 transition duration-300 ease-in-out": "hidden"}>
          {navigator.map (navBar => (
            <div key = {navBar.id} className = "cursor-pointer w-full hover:border-b-amber-100 items-start py-2" >{navBar.text} </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Head

