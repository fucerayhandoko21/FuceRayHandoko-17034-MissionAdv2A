import React from 'react';
import Image from 'next/image';
import Videologo from '../../../../public/logovideobelajar.png';

function Navbar() {
  return (
    <nav className="nav bg-white flex justify-between py-3 px-6 lg:px-40 border border-gray-300 shadow">
      <div className="logoLogin p-4 w-38 h-11 lg:w-59 lg:h-14">
        <Image 
          src={Videologo} 
          alt="Logo Video Belajar" 
          className='logoVideoBelajar'
          width={144}
          height={44}
        />
      </div>
    </nav>
  );
}

export default Navbar;
