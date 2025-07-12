import React from 'react'

const Heading = ({className,children}) => {
  return (
    <h2 className={`font-semibold text-[#FF9534] text-[30px] ${className}`}>{children}</h2>
  )
}

export default Heading