import React from 'react'
import useravatar1 from '../../assets/useravatar1.png'
import logo from "../../assets/login-100.svg";
import logox from "../../assets/x.svg";
import group from "../../assets/group.svg"
import groupselected from "../../assets/group-selected.svg"
import statenotselected from "../../assets/state-not-selected.svg"
import stateselected from "../../assets/state-selected.svg"
import plus from "../../assets/plus.svg"
import Tweetbox from '../../components/ui/Tweetbox';
import avatar2 from '../../assets/useravatar2.png'
import avatar3 from '../../assets/useravatar3.png'
import avatar4 from '../../assets/useravatar4.png'
import avatar5 from '../../assets/useravatar5.png'
import { useNavigate } from "react-router-dom";


function Homefeed() {
  const navigate = useNavigate();
  return (
    <div className=" w-[390px] h-full shrink-0 bg-neutral-1000 font-inter ">
  <header className="flex sticky flex-col items-center justify-center top-0 bg-neutral-1000">
    
    <div className="flex w-[390px] py-3 px-4 items-center gap-32 border-b-[1px] border-neutral-700">
      <img src={useravatar1} onClick={() => navigate("/100x-react-frontend/UserProfile")} />
      <div className="flex">
        <img src={logo} />
        <img src={logox} />
      </div>
    </div>
    <div className="flex pt-5 pb-0 px-20 items-center justify-center gap-40 self-stretch border-b-[1px] border-neutral-700 ">
      <div className="flex flex-col justify-center items-center gap-4"><button className="h-[38px] w-[56px] font-medium focus:text-neutral-400 text-neutral-50 focus:border-b-[3px] focus:border-twitter-blue-default ">For you</button></div>
      <div className="flex pb-0 justify-center items-center"><button className="h-[38px] w-[70px] font-medium focus:text-neutral-400 text-neutral-50 focus:border-b-[3px] focus:border-twitter-blue-default ">Following</button></div>
    </div>
  </header>
  <main className="flex w-[390px] py-0 px-[1px] flex-col items-start">
    <div className="flex flex-col items-center self-stretch  border-b-[1px] border-neutral-700">
      <Tweetbox avatar={avatar2} name="Name" handle="@handle • 10h" tweettext="Don't wish for it, work for it." comment="11"  retweet="270" like="1869" />
      <Tweetbox avatar={avatar3} name="Name" handle="@handle • 10h" tweettext="" comment="11"  retweet="270" like="1869" >i've seen people absolutely despise auto layout in figma but i think it's a lifesaver-1. tidies everything nice and compact <br />
              2. makes responsive design effortless<br />
              3. no manual adjustments post any tweaks<br />
              4. saves a tonnn of time<br /><br />
              sorry, but will stay an auto layout maxi all life.</Tweetbox>
      <Tweetbox avatar={avatar4} name="Name" handle="@handle • 10h" tweettext="" comment="11"  retweet="270" like="1869" >Writing gets easier after the first sentence.<br /><br />
              Lifting gets easier after the first set.<br /><br />
              People think and think and think until they finally decide to act. Their attention shifts from internal to external, and the difficulty they created in their mind vanishes.</Tweetbox>
      <Tweetbox avatar={avatar5} name="Name" handle="@handle • 10h" tweettext="I'm entering my relaxation era" comment="11"  retweet="270" like="1869" />
      <Tweetbox avatar={avatar3} name="Name" handle="@handle • 10h" tweettext="" comment="11"  retweet="270" like="1869" >if you work in tech and your colleagues use the term "tech bro" as a pejorative / unironically, you should start looking for your next job</Tweetbox>
      
    </div>
  </main>
  <button className="fixed inline-flex py-3 px-8 ml-[90px] justify-center items-center gap-[10px] bottom-[72px] rounded-[100px] bg-searchbar-fill text-[15px] leading-normal text-neutral-50">Copied to clipboard.</button>
  {/* <a href="https://100x-engineers.github.io/layouts-assignment-mohammadravoof/src/compose-tweet/index.html"> */}
    <button className="fixed inline-flex bottom-[72px] p-4 ml-[304px] items-start gap-[10px] rounded-[32px] bg-twitter-blue-default shadow-[0_8px_16px_0_rgba(0,0,0,0.25)]" onClick={() => navigate("/100x-react-frontend/ComposeTweet")}><img src={plus} alt="plus" /></button>
    {/* </a> */}
  <div className=" flex fixed bottom-0 w-[390px] h-[60px] py-[18px] px-6 justify-center items-center gap-10 border-t-[1px] border-neutral-800 bg-neutral-1000">
    <button className="flex flex-col relative group items-center justify-center  w-6 h-6" >
      <img className="absolute visible group-focus:invisible" src={statenotselected} />
      <img className="absolute invisible group-focus:visible " src={stateselected} />
    </button>
    {/* <a href="https://100x-engineers.github.io/layouts-assignment-mohammadravoof/src/user-profile/index.html"> */}
      <button className="flex-col flex relative group items-center justify-center w-6 h-6 " onClick={() => navigate("/100x-react-frontend/UserProfile")}>
        <img className="absolute visible group-focus:invisible" src={group} />
        <img className="absolute invisible group-focus:visible" src={groupselected} />
      </button>
      {/* </a> */}
  </div>
</div>

  )
}

export default Homefeed