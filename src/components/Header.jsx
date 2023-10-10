import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);
    return (
        <header className='bg-pink-200'>
            <div className='container mx-auto flex items-center justify-between h-full'>
                <Link to={'/'}>
                    <div>
                        <img className='w-[40px]' src={Logo} alt='' />
                    </div>
                </Link>
                <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
                    <BsBag className='text-2xl' />
                    <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[19px] text-white rounded-full flex justify-center items-center'>
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header