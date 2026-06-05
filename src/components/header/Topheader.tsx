import React from 'react'
import { Link } from 'react-router'
import logo from '/src/img/logo.png'
import { FaSearch } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";



function Topheader() {
    return (
        <div className='flex items-center justify-between py-4 mt-3'>
            <div className='container flex items-center justify-between  px-4 '>
                <Link to='/' className='w-32 h-12' ><img src={logo} alt="Logo" /></Link>

                <form action="" className='flex items-center w-full max-w-2xl'>
                    <input type="text"
                    placeholder='Search for item'
                    className='flex-1 rounded-l-full px-5 py-2.5 border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-400 transition-colors' />
                    <button 
                    type="submit" 
                    className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-r-full border border-blue-500 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors flex items-center justify-center'>
                        <FaSearch size={20} />
                    </button>
                </form>

            <div className='flex items-center gap-5'>
                <div className='relative'>
                    <MdFavoriteBorder size={24} />
                    <span className='absolute -top-2 -right-2 bg-blue-500 rounded-full text-white w-4 h-4 text-[10px] flex items-center justify-center'>
                    2
                    </span>
                </div>
                <div className='relative'>
                    <TiShoppingCart size={24} />
                    <span className='absolute -top-2 -right-2 bg-blue-500 rounded-full text-white w-4 h-4 text-[10px] flex items-center justify-center'>
                    3
                    </span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Topheader
