import logo from "../../assets/login-100.svg";
import logox from "../../assets/x.svg";

function LoginHeader() {
  return (
    <div className="flex w-[390px] py-3 px-4 justify-center items-center ">
    <img src={logo} />
    <img src={logox} />
    </div>
  )
}

export default LoginHeader