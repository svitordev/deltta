"use client"
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { MobileMenu } from './Menu/mobileMenu';
import { MenuPlus } from './Menu/menu';

export const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const menuIsOpen = () => setMenuMobile(true);
  const menuIsClose = () => setMenuMobile(false);
  return (
    <header className='bg-white py-3 flex justify-between items-center px-3'>
      <div className='items-center inline-flex gap-2'>
        <div className='w-11 h-11 rounded-full bg-natureza-700'></div>
        <h1 className='text-2xl font-extrabold font-sans text-neutral-800'>AGROSLAF</h1>
      </div>
      <div className="relative">
        {!menuMobile ? (
          <div onClick={menuIsOpen} className="md:hidden  cursor-pointer p-2 ">
            <Menu className='text-natureza-800 size-8' />
          </div>
        ) : (
          <div onClick={menuIsClose} className="md:hidden  cursor-pointer p-2 ">
            <X className='text-natureza-800 size-8' />
          </div>
        )}
        {menuMobile && (
          <MobileMenu />
        )}
        <MenuPlus />
      </div>
      
    </header>
  )
}
