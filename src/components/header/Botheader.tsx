    import React, { useEffect, useState } from 'react'
    import { IoMdMenu } from "react-icons/io";
    import { MdOutlineArrowDropDown } from "react-icons/md";
    import { Link } from 'react-router-dom';
    import { PiSignInFill } from "react-icons/pi";
    import { FaUserPlus } from "react-icons/fa6";

    type Category = {
    slug: string;
    name: string;
    url: string;
    }

    function Botheader() {
    const navLinks = [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Accessories', url: '/accessories' },
        { title: 'Blog', url: '/blog' },
        { title: 'Contact', url: '/contact' },
    ]

    const [categories, setCategories] = useState<Category[]>([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then((data) => setCategories(data));
    }, [])

    return (
        <div className='bg-blue-500 py-2 mt-3 h-15'>
        <div className='container mx-auto px-4'>
            <nav className='flex items-center justify-between'>

            {/* Browse Categories Dropdown */}
            <div className='relative'>
                <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='flex items-center gap-1 text-white cursor-pointer] px-3 py-1 rounded mt-1'
                >
                <IoMdMenu size={24} color='white' />
                <span>Browse Categories</span>
                <MdOutlineArrowDropDown size={24} color='white' />
                </button>

                {dropdownOpen && (
                <ul className='absolute top-full left-0 mt-1 bg-white shadow-lg rounded z-50 min-w-48'>
                    {categories.map((category) => (
                    <li key={category.slug}>
                        <Link
                        to={`/category/${category.slug}`}
                        className='block px-4 py-2 text-gray-500 hover:bg-blue-50 capitalize'
                        onClick={() => setDropdownOpen(false)}
                        >
                        {category.name}
                        </Link>
                    </li>
                    ))}
                </ul>
                )}
            </div>

            {/* Nav Links */}
            <ul className='flex items-center gap-13'>
                {navLinks.map((link) => (
                <li key={link.title}>
                    <Link
                    to={link.url}
                    className='text-white hover:text-blue-100 capitalize font-medium'
                    >
                    {link.title}
                    </Link>
                </li>
                ))}
            </ul>

            {/* Auth Links */}
            <div className='flex items-center gap-10 ml-40'>
                <Link to='/login' className='flex items-center gap-1 text-white hover:text-blue-100'>
                <PiSignInFill size={20} />
                </Link>
                <Link to='/register' className='flex items-center gap-1 text-white hover:text-blue-100'>
                <FaUserPlus size={20} />
                </Link>
            </div>

            </nav>
        </div>
        </div>
    )
    }

    export default Botheader