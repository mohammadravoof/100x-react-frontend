import logo from "./assets/login-100.svg";
import logox from "./assets/x.svg";

function Button(props) {
  const base = "flex h-[35px] px-[24px] py-[8px] justify-center items-center self-stretch gap-[10px] rounded-[65px] shadow-[0_8px_16px_0_rgba(0,0,0,0.25)] backdrop-blur-[23.668209075927734px] font-bold";
  const variant = {
    default:"bg-neutral-50 hover:bg-neutral-200 text-neutral-1000",
    outline:"border-solid border border-stroke text-twitter-blue-default",
  };
  const disabledStyles = props.disabled ? "cursor-not-allowed disabled:bg-neutral-500" : " ";
  const classes = `${base} ${variant[props.variant]} ${disabledStyles}`;
  return(
    <button className={classes} disabled={props.disabled}>{props.text}</button>
  )
}

function Main() {
  return (
    <>
<div className="flex w-[390px] py-3 px-4 justify-center items-center ">
    <img src={logo} />
    <img src={logox} />
  </div>
  <div className="flex w-[390px] flex-col pt-[190px] px-7 items-start gap-10">
    <div className="flex flex-col items-start self-stretch gap-3">
      <div className="font-extrabold text-[31px] text-neutral-50">Happening now</div>
      <h3 className="text-base font-medium text-neutral-50">Join today.</h3>
    </div>
    <Button variant="default" text="Create Account" />
    <div className="flex justify-center items-center gap-1 self-stretch">
      <div className="w-[155.5px] h-[1px] bg-neutral-700" />
      <div className="text-neutral-50">or</div>
      <div className="w-[155.5px] h-[1px] bg-neutral-700" />
    </div>
    <div className="flex flex-col items-start gap-5 self-stretch">
      <p className="text-neutral-50 text-[15px]">Already have an account?</p>
      <Button variant="outline" text="Sign in" />
    </div>
  </div>
  </>
  )
}
function App() {


  return (
    <>
     <div className="w-[390px] h-[868px] shrink-0 bg-neutral-1000 font-inter">
  {/* <div className="flex w-[390px] h-11 pt-[14px] pr-[14.5px] pb-3 pl-[19.894px] justify-around items-center gap-[234.606px] shrink-0">
    <div className="text-neutral-50 text-center text-[15px] font-bold -tracking-[0.165px] leading-[18px] ">9:41</div>
    <img src="../../public/images/signal.svg" />
  </div> */}
  <Main></Main>
</div>

    </>
  )
}

export default App
