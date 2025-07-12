import React from 'react'

const Button = ({ className, children, onClick, onSubmit, type }) => {
    return (
        <button className={`bg-[#FF9534] text-white py-5 px-[30px] group rounded-[5px] hover:bg-white border border-transparent hover:border-[#FF9534] hover:text-[#FF9534] duration-300 ${className}`} onClick={onClick} onSubmit={onSubmit} type={type}>{children}</button>
    )
}

export default Button