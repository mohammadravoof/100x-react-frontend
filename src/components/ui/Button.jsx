import PropTypes from 'prop-types'

function Button({ children = "Add your Text",disabled = false , variant = "default", ...rest}) {
    const base = "flex justify-center items-center self-stretch gap-[10px] shadow-[0_8px_16px_0_rgba(0,0,0,0.25)] backdrop-blur-[23.668209075927734px] font-bold";
    const variantStyles = {
      default:"h-[35px] px-6 rounded-[65px] py-2 bg-neutral-50 hover:bg-neutral-200 text-neutral-1000",
      white:"py-3 px-6 rounded-[65px] bg-neutral-50 hover:bg-neutral-200 text-neutral-1000",
      outline:"py-2 px-6 rounded-[65px] border-solid border border-stroke text-twitter-blue-default",
      blue:"h-[59px] p-5 rounded-[9999px] bg-twitter-blue-default hover:bg-twitter-blue-hover disabled:bg-twitter-blue-disabled text-center leading-normal text-base text-neutral-50",
    };
    const disabledStyles = disabled ? "cursor-not-allowed disabled:bg-neutral-500" : " ";
    const classes = `${base} ${variantStyles[variant]} ${disabledStyles}`;
    return(
  
      <button className={classes} disabled={disabled} {...rest} >{children}</button>
  
    ) 
  }
  
  Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['default','outline']).isRequired,
    
  }

  export default Button

  // flex h-[59px] self-stretch p-5 justify-center items-center gap-[10px]
  //  rounded-[9999px] bg-twitter-blue-default hover:bg-twitter-blue-hover
  //   disabled:bg-twitter-blue-disabled shadow-[0_8px_16px_0_rgba(0,0,0,0.25)]
  //    backdrop-blur-[23.668209075927734px] text-center leading-normal
  //     text-base text-neutral-50

  // flex  px-6 py-3 justify-center items-center gap-[10px] self-stretch rounded-[65px]
  //  bg-neutral-50 hover:bg-neutral-200 disabled:bg-neutral-500 shadow-[0_8px_16px_0_rgba(0,0,0,0.25)]
  //   backdrop-blur-[23.668209075927734px]

