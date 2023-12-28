import React, { useState }from 'react';
import Button from '../../components/ui/Button';
import Fieldset from '../../components/ui/Fieldset';
import Steps from '../../components/ui/Steps';
import Dobfetcher from '../../components/ui/Dobfetcher';
import HeadingOfCreateAccout from '../../components/ui/HeadingOfCreateAccout';
import { useNavigate } from "react-router-dom";

const Step1 = ( ) => {

  

  const navigate = useNavigate();
  return (

    <div className="flex items-center w-[390px] h-screen m-10 shrink-0 bg-neutral-1000 font-inter">
  
  <div className="flex w-[390px] h-[824px] pt-0 px-[15px] pb-5 flex-col items-start gap-3 shrink-0 ">
    <Steps onClick={() => navigate("/")}>1</Steps>
    <HeadingOfCreateAccout text="Create your account"></HeadingOfCreateAccout> 
    <div className="flex flex-col items-center gap-8 self-stretch">
    <Fieldset text="Name" input="Name" />
    <Fieldset text="Email" input="Email"/>
      <div className="flex flex-col items-start gap-2 self-stretch">
        <div className="text-neutral-50 text-[15px] font-bold">Date of birth</div>
        <div className="self-stretch text-secondary text-sm/normal  ">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or <br /> something else.</div>
      </div>
      <Dobfetcher />

    </div>
    <div className="flex py-20 px-5 flex-col justify-end items-center gap-[10px] self-stretch grow shrink-0 basis-0">
    <Button variant="white" onClick={() => navigate("/Step2")}  >Create account</Button>
    </div>
  </div>
</div>
  )
}

export default Step1