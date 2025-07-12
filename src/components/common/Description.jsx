import React from 'react'

const Description = ({className,children}) => {
  return (
    <p className={`text-[17px] text-[#22343D] ${className}`}>{children}</p>
  )
}

export default Description