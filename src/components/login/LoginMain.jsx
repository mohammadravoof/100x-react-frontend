import Button from "../ui/Button";
// import { AuthContext } from "../../context/AuthContext";
// import { useContext } from "react";

function LoginMain() {

    // const { setIsLoggedIn } = useContext(AuthContext);

  return (
    
      
        <div className="flex w-[390px] flex-col pt-[190px] px-7 items-start gap-10">
          <div className="flex flex-col items-start self-stretch gap-3">
            <div className="font-extrabold text-[31px] text-neutral-50">Happening now</div>
            <h3 className="text-base font-medium text-neutral-50">Join today.</h3>
          </div>
          <Button variant="default">Create Account</Button>
          <div className="flex justify-center items-center gap-1 self-stretch">
            <div className="w-[155.5px] h-[1px] bg-neutral-700" />
            <div className="text-neutral-50">or</div>
            <div className="w-[155.5px] h-[1px] bg-neutral-700" />
          </div>
          <div className="flex flex-col items-start gap-5 self-stretch">
            <p className="text-neutral-50 text-[15px]">Already have an account?</p>
            <Button variant="outline" >Sign in</Button>
          </div>
        </div>

        )
      }

export default LoginMain