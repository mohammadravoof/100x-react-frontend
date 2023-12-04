import React from 'react'
import Button from '../../components/ui/Button'
import x from '../../assets/signup-x.svg'
import eye from '../../assets/eye.svg'
import Fieldset from '../../components/ui/Fieldset'

function Step3() {
  return (
    <div className="w-[390px] h-[868px] shrink-0 bg-neutral-1000 font-inter">
  <div className="flex w-[390px] h-[824px] pt-0 px-[15px] pb-5 flex-col items-start gap-3 shrink-0 ">
    <div className="flex py-3 px-0 items-center gap-5 self-stretch">
      <button><a href="https://100x-engineers.github.io/layouts-assignment-mohammadravoof/src/login/create-account-step-2.html"><img src={x} /></a></button>
      <p className="text-neutral-50 text-[15px] font-bold ">Step 3 of 4</p>
    </div>
    <div className="flex flex-col items-start gap-10 self-stretch">
      <div className="flex flex-col items-start gap-2 self-stretch">
        <h3 className="text-neutral-50 text-2xl/normal font-bold">We sent you a code</h3>
        <p className="text-neutral-500 text-sm/normal">Enter it below to verify ravbinhak843@gmail.com</p>
      </div>
      <div className="flex flex-col items-end gap-3 self-stretch">
        <Fieldset text="Verification code" input="Verification code" icon={eye}/>
        <p className="text-twitter-blue-default text-sm/normal">Didn't receive a code?</p>
      </div>
    </div>
    <div className="flex pt-20 flex-col justify-end items-center gap-5 self-stretch grow shrink-0 basis-0">
    <Button variant="white">Next</Button>
    </div>
  </div>
</div>

  )
}

export default Step3