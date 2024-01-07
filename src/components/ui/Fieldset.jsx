import React from 'react'
import PropTypes from 'prop-types'

function Fieldset({text,input,icon,type,focused, ...rest}) {
  
  return (
<div className={`flex relative items-center self-stretch group border border-neutral-500 focus-within:border-twitter-blue-default rounded py-4 px-3 justify-between ${focused ? 'border-twitter-blue-default' : ''}`}>
    <input className={`peer text-xl/normal bg-transparent focus:outline-none focus-within:text-neutral-50 grow ${focused ? 'outline-none text-neutral-50' : 'text-neutral-500'}`} type={type} placeholder={input} {...rest} />
    <div className={`absolute inline-flex items-center justify-center px-1 py-0 -top-2 text-xs/normal font-medium text-neutral-500  bg-neutral-1000 peer-focus:text-twitter-blue-default ${focused ? 'text-twitter-blue-default' : ''} `}>{text}</div>
    <img className={`${focused ? 'visible' : 'invisible peer-focus:visible' }`} src={icon} />
</div>
)
}

Fieldset.propTypes = {
  text: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  icon: PropTypes.string,
  
}
export default Fieldset