import React from 'react'
import PropTypes from 'prop-types'

function HeadingOfCreateAccout({children,text}) {
  return (
    <div className="flex flex-col items-start gap-2 self-stretch">
        <h3 className="text-neutral-50 text-2xl/normal font-bold">{text}</h3>
        <p className="text-neutral-500 text-sm/normal">{children}</p>
      </div>
  )
}

HeadingOfCreateAccout.propTypes = {
    children: PropTypes.string,
    text: PropTypes.string.isRequired,

    
  }
export default HeadingOfCreateAccout