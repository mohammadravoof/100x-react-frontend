import React from 'react'
import x from '../../assets/signup-x.svg'
import PropTypes from 'prop-types'

function Steps({children,onClick}) {
  return (
    <div className="flex py-3 px-0 items-center gap-5 self-stretch">
    <button onClick={onClick}><img src={x}/></button>
    <p className="text-neutral-50 text-[15px] font-bold ">Step {children} of 4</p>
  </div>
  )
}

Steps.propTypes = {
    children: PropTypes.string.isRequired,
    

    
  }

export default Steps