import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/login-100.svg";
import logox from "../../assets/x.svg";
// import { AuthContext } from "../../context/AuthContext";
// import { useContext } from "react";

function LoginMain() {

    // const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
  return (
    <div className="flex-col flex items-center justify-center">
    <div className="flex w-[390px] mt-10 py-3 px-4 justify-center items-center ">
    <img src={logo} />
    <img src={logox} />
    </div>
    
        <div className="flex w-[390px] flex-col pt-[190px] px-7 items-start gap-10">
          <div className="flex flex-col items-start self-stretch gap-3">
            <div className="font-extrabold text-[31px] text-neutral-50">Happening now</div>
            <h3 className="text-base font-medium text-neutral-50">Join today.</h3>
          </div>
          <Button variant="default" onClick={() => navigate("/Step1")}>Create Account</Button>
          <div className="flex justify-center items-center gap-1 self-stretch">
            <div className="w-[155.5px] h-[1px] bg-neutral-700" />
            <div className="text-neutral-50">or</div>
            <div className="w-[155.5px] h-[1px] bg-neutral-700" />
          </div>
          <div className="flex flex-col items-start gap-5 self-stretch">
            <p className="text-neutral-50 text-[15px]">Already have an account?</p>
            <Button variant="outline" onClick={() => navigate("/Homefeed")} >Sign in</Button>
          </div>
        </div>
        </div>

        )
      }

export default LoginMain