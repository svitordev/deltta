import React from 'react'

export const Title = ({center, children}) => {
  return (
    <div className={`flex-col ${center && ("items-center")} flex`}>
        <h1 className='text-2xl text-natureza-900 font-bold font-serif leading-none'>{children}</h1>
        {children && (
            <div className='w-12 h-1 rounded-full bg-natureza-500'></div>
        )}
    </div>
    
  )
}
