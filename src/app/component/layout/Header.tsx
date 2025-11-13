'use client'
import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <nav className="nav bg-white flex justify-between py-3 px-6 lg:px-40 border border-gray-100 shadow">
        
        <div className="p-3 w-38 h-11 lg:w-59 lg:h-14">
            <Image
            src="/logovideobelajar.png"
            alt='logoVideobelajar'
            width={144}
            height={44}
            />
        </div>
        
        <div className="md:hidden flex items-center">
            <button id="menu-button" className="text-gray-800 focus:outline-none"> 
                <i id="menu-icon" className="fas fa-bars w-6 h-6"></i>
            </button>
        </div>
        
        <div className="flex items-center space-x-2">
            <a href="#" className="p-4 text-base text-gray-800 hover:text-blue-500 transition-colors duration-200">kategori</a>
            <Image src="/Avatar.png"
            alt="Avatar" 
            className="p-1 rounded"
            width={44}
            height={44}
            />
        </div>
    </nav>
    )
}

export default Header