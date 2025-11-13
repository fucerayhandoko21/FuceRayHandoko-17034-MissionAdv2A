"use client";

import React, { useState, FormEvent } from 'react'; 
import Link from 'next/link';
import Navbar from '../component/layout/Navbar';
import Image from 'next/image';
import Googlelogo from '../../../public/Google-logo.png'

type InputType = 'password' | 'text';

function Login() {
    const [passwordType, setPasswordType] = useState<InputType>('password');
    const [password, setPassword] = useState(''); 
    const [email, setEmail] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    return (
        <div className='bg-yellow-50'>
        <Navbar />
        
        <div className=" container flex items-center justify-center lg:min-w-screen py-7 px-5 lg:py-10 lg:px-30 lg:gap-9">
        <div className="card space-y-6 p-5 lg:p-9 lg:w-lg mx-auto bg-white shadow-lg rounded-lg">
            <div>
                <h1 className="flex justify-center  text-2xl lg:text:4xl font-bold">Masuk ke Akun</h1>
                <h3 className="flex justify-center items-center text-sm lg:text-sm">Yuk, lanjutin belajarmu di videobelajar</h3>
            </div>
            <div className="form-container">
                <form className="">
                    <label htmlFor="email" className="block text-base">E-Mail <span className="text-red-500">*</span></label>
                    <input id="email" type="email" className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Kata Sandi <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input id="password" type="password" className="border border-gray-300 rounded p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" />
                            <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200">
                                <i id="password-toggle-icon" className="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className="hover:border-b">lupa password?</button>
                    </div>
                    <button className="w-full my-3 py-1 text-sm bg-green-500 text-white  rounded hover:bg-green-700">Masuk</button>

                    <button className="w-full py-1 text-sm bg-green-200 text-green-500  rounded  hover:bg-green-400">Daftar</button>

                    <div className="relative flex items-center mt-3">
                        <hr className="flex grow border-t"></hr>
                        <span className="flex shrink mx-2">atau</span>
                        <hr className="flex grow border-t"></hr>
                    </div>

                    <button className="flex justify-center items-center w-full border border-gray-300 p-2 bg-white-200 my-3 text-black  rounded hover:bg-blue-200">
                    <Image 
                            src={Googlelogo} 
                            alt="Logo Video Belajar"
                            className="w-7"
                        /> Masuk dengan Google</button>

                </form>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Login;