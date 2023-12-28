import React from 'react'
import signupx from '../../assets/signup-x.svg'
import useravatar1 from '../../assets/useravatar1.png'
import { useNavigate } from "react-router-dom";

function ComposeTweet() {
  const navigate = useNavigate();
  return (
    <div className="w-[390px] h-[970px] shrink-0 bg-neutral-1000 font-inter ">
  
  <div className="flex py-3 px-4 justify-between items-center ">
    <button onClick={() => navigate("/Homefeed")}><img src={signupx} /></button>
<button className="flex py-2 px-6 justify-center items-center gap-[10px] rounded-[30px] bg-twitter-blue-default hover:bg-twitter-blue-hover disabled:bg-twitter-blue-disabled shadow-[0_8px_16px_0_rgba(0,0,0,0.25)] backdrop-blur-[23.668209075927734px]" onClick={() => navigate("/Homefeed")}><span className="text-center font-bold text-sm/normal text-neutral-50">Post</span></button>
  </div>
  <div className="flex w-[390px] py-2 px-4 justify-center items-start gap-3">
    <img src={useravatar1} alt="user-avatar" />
    <textarea rows={10} className="flex mt-2 grow items-center flex-1 shrink-0 basis-0 bg-transparent text-neutral-50 self-stretch focus:outline-none resize-none" placeholder="What's happening?!" defaultValue={""} />
  </div>
  <div className="flex fixed bottom-0 w-[390px] py-3 px-4 items-center gap-5 border-t-[1px] border-neutral-800">
    <span className="text-neutral-500">0/280</span>
  </div>
</div>

  )
}

export default ComposeTweet