"use client"
import React, { useState, FormEvent, use } from 'react';
import next from 'next';
import Navbar from '../component/layout/Navbar';
import Image from 'next/image';
import Googlelogo from '../../../public/Google-logo.png'


function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        console.log('Logika pendaftaran akan dieksekusi. Data form submission.');
    };

    const togglePasswordVisibility = (fieldId: string) => {
        if (fieldId === 'password') {
            setShowPassword(prev => !prev);
        } else if (fieldId === 'confirm-password') {
            setShowConfirmPassword(prev => !prev);
        }
    };
    
    const toggleCountryDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    return (
    <>
    <Navbar />

        <div className="container flex items-center justify-center min-h-screen py-7 px-5 lg:py-10 lg:px-30 lg:gap-9 font-sans bg-yellow-50 max-w-full">
            <div className="card space-y-6 p-5 lg:p-9 lg:w-128 mx-auto bg-white shadow-2xl rounded-xl border border-gray-100">
                <div>
                    <h1 className="flex justify-center text-2xl lg:text-4xl font-bold text-gray-800">Pendaftaran Akun</h1>
                    <h3 className="flex justify-center text-sm lg:text-base text-gray-600 mt-1">Yuk, daftarkan akunmu sekarang juga!</h3>
                </div>
                
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        
                        <label htmlFor="name" className="block text-sm font-medium text-black">Nama Lengkap <span className="text-red-500">*</span></label>
                        <input id="name" name="name" type="text" className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 text-black" required />
                        
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 pt-2">Nomor HP <span className="text-red-500">*</span></label>
                        <div className="flex items-center w-full ">    
                            <div className="relative inline-block text-left z-10">
                                <button
                                    type="button"
                                    onClick={toggleCountryDropdown}
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                                >
                                    <img src="https://flagcdn.com/id.svg" alt="Bendera Indonesia" className="w-5 h-4 mr-2" />
                                    <span>+62</span>
                                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute mt-1 w-48 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu">
                                            <a href="#" onClick={() => setIsDropdownOpen(false)} className="flex items-center px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                                <img src="https://flagcdn.com/id.svg" alt="Bendera Indonesia" className="w-5 h-4 mr-2" />
                                                <span>+62 Indonesia</span>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <input 
                                id="phone" 
                                name="phone" 
                                type="tel" 
                                className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-2 transition-shadow duration-200 text-black" 
                                required
                            />
                        </div>

                        <div className="lg:hidden">
                            <label htmlFor="jenisKelamin" className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                            <select name="jenisKelamin" id="jenisKelamin" className="pl-3 border border-gray-300 w-full h-11 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200">
                                <option value="">pilih salah satu</option>
                                <option value="wanita">Wanita</option>
                                <option value="lakiLaki">Laki Laki</option>
                            </select>
                        </div>

                        <label htmlFor="email" className="block text-sm font-medium text-black pt-2">E-Mail <span className="text-red-500">*</span></label>
                        <input id="email" name="email" type="email" className="border border-gray-300 rounded p-2 w-full focus:outline-none text-black focus:ring-2 focus:ring-blue-500 transition-shadow duration-200" required />
                        
                        <div className="pt-2">
                            <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
                                Kata Sandi <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input 
                                    id="password" 
                                    name="password"
                                    type={showPassword ? 'text' : 'password'} 
                                    className="border border-gray-300 rounded p-2 w-full pr-10 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
                                    required
                                />
                                <button 
                                    type="button" 
                                    onClick={() => togglePasswordVisibility('password')} 
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-black">
                                Konfirmasi Kata Sandi <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input 
                                    id="confirm-password" 
                                    name="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'} 
                                    className="border border-gray-300 rounded p-2 w-full pr-10 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" 
                                    required
                                />
                                <button 
                                    type="button" 
                                    onClick={() => togglePasswordVisibility('confirm-password')} 
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
                                    aria-label={showConfirmPassword ? 'Hide confirmation password' : 'Show confirmation password'}
                                >
                                    <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end text-sm">
                            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
                                lupa password?
                            </a>
                        </div>
                        
                        <button type="submit" className="w-full my-3 py-2 text-base bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md">
                            Daftar
                        </button>

                        <div className="w-full">
                            <button type="button" className="w-full py-2 text-base bg-green-100 text-green-600 font-semibold rounded-lg hover:bg-green-200 transition-colors duration-200 shadow-sm">
                                Masuk
                            </button>
                        </div>

                        <div className="relative flex items-center mt-3">
                            <hr className="flex grow border-t border-gray-300" />
                            <span className="flex shrink mx-3 text-gray-500 text-sm">atau</span>
                            <hr className="flex grow border-t border-gray-300" />
                        </div>

                        <button type="button" className="flex justify-center items-center w-full border border-gray-300 p-2 bg-white my-3 text-black rounded-lg hover:bg-gray-50 transition-colors duration-200 space-x-2 shadow-sm">
                            <Image
                            src={Googlelogo}
                            alt='Googlelogo'
                            className='w-7'
                            />
                            <span>Masuk dengan Google</span>
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </>
    );
}

export default Register;
