import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const SeeAllPlus = ({children}) => {
  return (
    <Link href="/" className='flex items-center gap-2 font-semibold font-serif text-natureza-700 hover:text-natureza-800 text-sm p-1'>
        <span>{children}</span>
        <ArrowRight className='size-4'/>
    </Link>
  )
}
