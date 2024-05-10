import React from 'react'

const Button = ({ title, onClick }) => {
    return (
        <button className='mt-3 px-2 py-1 bg-secondary border border-primary text-primary font-teko text-xl cursor-pointer btn lg:text-2xl font-semibold' onClick={onClick}>
            {title}
        </button>
    )
}

export default Button