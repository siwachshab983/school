import React from 'react'

const Button = ({ className, children, onClick, onSubmit, type }) => {
    return (
        <button className={`bg-[#FF9534] cursor-pointer text-white py-3.5 px-4.5 sm:py-5 sm:px-[30px] group rounded-[5px] hover:bg-white border border-transparent hover:border-[#FF9534] hover:text-[#FF9534] duration-300 ${className}`} onClick={onClick} onSubmit={onSubmit} type={type}>{children}</button>
    )
}

export default Button