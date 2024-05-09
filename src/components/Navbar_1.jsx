import { useState } from 'react';
import Brunel from '../assets/Brunel.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Navbar_1 = () => {

  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const register = ()=>{
    navigate('/register')
  }

  return (
    <div className='flex flex-col justify-center'>
      <div className="flex flex-col flex-grow items-center justify-center relative">
        <div className='flex items-center rounded-full border border-gray-200 overflow-hidden w-full p-3 mt-5 md:w-full'> 
          <img src={Brunel} width={150} height={150} className="rounded ml-4" alt="logo" />
          <div className="flex flex-row items-center justify-end flex-grow mr-4 space-x-4"> 
            <button className="rounded-full bg-white text-black px-4 py-3 hidden lg:block hover:text-black hover:bg-gray-200 border border-black hover:border-gray-400"onClick={register}>Get Projects</button>
            <button className="rounded-full bg-black text-white px-4 py-3 hidden lg:block hover:bg-gray-700 hover:text-white">Onboard Talent</button>
            <button onClick={toggleMenu} className="text-2xl text-gray-600 lg:hidden focus:outline-none">
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="flex flex-col items-center justify-center mt-2 p-2 rounded-md lg:hidden w-full space-y-3">
            <button className="rounded-full bg-gray-200 text-black px-4 py-3 mt-2" onClick={register}>Get Projects</button>
            <button className="rounded-full bg-black text-white px-4 py-3 mt-2">Onboard Talent</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar_1;
