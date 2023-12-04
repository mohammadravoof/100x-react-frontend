import PropTypes from 'prop-types'

function Button({ children = "Add your Text",disabled = false , variant = "default", ...rest}) {
    const base = "flex h-[35px] px-[24px] py-[8px] justify-center items-center self-stretch gap-[10px] rounded-[65px] shadow-[0_8px_16px_0_rgba(0,0,0,0.25)] backdrop-blur-[23.668209075927734px] font-bold";
    const variantStyles = {
      default:"bg-neutral-50 hover:bg-neutral-200 text-neutral-1000",
      outline:"border-solid border border-stroke text-twitter-blue-default",
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