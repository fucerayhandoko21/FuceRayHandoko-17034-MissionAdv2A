'use client'
import React, { MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const toggleMenu = (e: MouseEvent<HTMLAnchorElement>, submenuId: string) => {
    e.preventDefault(); 
    const submenu = document.getElementById(submenuId);
    if (submenu) {
        submenu.classList.toggle('hidden');
    }
};

function Footer() {
    return (
        <footer className="p-5 md:py-15 md:px-30 bg-white">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 text-sm">
                    <div className="gap-4">
                        <Image 
                        src="/Avatar.png"
                        alt="VideoBelajar" 
                        className="pb-5"
                        width={38}
                        height={11}
                        /> 
                        
                        <h3 className="font-bold">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h3>
                        <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                        <p>+62-877-7123-1234</p>
                    </div>
                    
                    <div className="">
                        <div className="">
                            <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-6 py-3">

                                <div className="menu-column lg:p-4">
                                    <a href="#" className="menu-header flex justify-between items-center hover:bg-gray-50 lg:p-0" onClick={(e) => toggleMenu(e, 'submenu-1')}>
                                        <h3 className="text-sm font-semibold text-gray-800 lg:text-lg lg:mb-3">Kategori</h3>
                                        <span className="text-gray-500 font-bold lg:hidden">&gt;</span> 
                                    </a>
                                    <ul id="submenu-1" className="submenu hidden p-4 space-y-2 lg:block lg:p-0">
                                        <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Digital & Teknologi</a></li>
                                        <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Pemasaran</a></li>
                                    </ul>
                                </div>

                                <div className="menu-column lg:p-4">
                                    <a href="#" className="menu-header flex justify-between items-center hover:bg-gray-50 lg:p-0" onClick={(e) => toggleMenu(e, 'submenu-2')}>
                                        <h3 className="text-sm font-semibold text-gray-800 lg:text-lg lg:mb-3">Perusahaan</h3>
                                        <span className="text-gray-500 font-bold lg:hidden">&gt;</span> 
                                    </a>
                                    <ul id="submenu-2" className="submenu hidden space-y-2 lg:block lg:p-0">
                                    </ul>
                                </div>

                                <div className="menu-column bg-white lg:p-4">
                                    <a href="#" className="menu-header flex justify-between items-center hover:bg-gray-50 lg:p-0" onClick={(e) => toggleMenu(e, 'submenu-3')}>
                                        <h3 className="text-sm font-semibold text-gray-800 lg:text-lg lg:mb-3">Komunitas</h3>
                                        <span className="text-gray-500 font-bold lg:hidden">&gt;</span> 
                                    </a>
                                    <ul id="submenu-3" className="submenu hidden space-y-2 lg:block lg:p-0">
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <br className="hidden lg:block" /> 
                <hr className="my-4"/> 

                <div className="">
                    <div className="flex flex-col md:grid md:grid-cols-2 md:space-x-2">
                        <div className="py-4 text-2xl space-x-2"> 
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-square-instagram"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-square-twitter"></i>
                        </div>

                        <div className="flex md:justify-end py-4">
                            <h2 className="text-sm lg:font-bold mt-0 mb-0">@2023 Gerobak Sayur All Rights Reserved.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;