import React from 'react'
import commentsymbol from '../../assets/comment.svg'
import retweetsymbol from '../../assets/group-26840.svg'
import heart from '../../assets/heart.svg'
import reach from '../../assets/reach-sv.png'
import sharesymbol from '../../assets/vector.svg'
function Tweetbox({children,avatar,name="Name",handle="@handle • 10h",tweettext="Tweet area",comment="0",retweet="0",like="0",engagement="99"}) {
  return (
    <div className="flex py-2 px-4 items-start gap-4 self-stretch border-b border-neutral-700">
        <img className="aspect-square w-12 h-12 rounded-full" src={avatar} />
        <div className="flex flex-col items-start gap-2 flex-1 shrink-0 basis-0">
          <div className="flex flex-col items-start mb-1">
            <div className="flex items-center gap-2 self-stretch">
              <div className="text-neutral-50 font-medium ">{name}</div>
              <div className="text-neutral-500">{handle}</div>
            </div>
            <div className="text-[15px] text-neutral-50">{tweettext}{children}</div>
          </div>
          <div className="flex py-3 px-0 justify-between items-center self-stretch">
            <button className="flex justify-center items-center gap-[5px] text-sm text-neutral-500">
              <img src={commentsymbol} />{comment}
            </button>
            <button className="flex justify-center items-center gap-[5px] text-sm text-neutral-500">
              <img src={retweetsymbol} />{retweet}
            </button>
            <button className="flex justify-center items-center gap-[5px] text-sm text-neutral-500">
              <img src={heart} />{like}
            </button>
            <button className="flex items-start gap-[5px] text-sm text-neutral-500">
              <img src={reach} />{engagement}
            </button>
            <button className="text-sm text-neutral-500">
              <img src={sharesymbol} />
            </button>
          </div>
        </div>
      </div>
  )
}

export default Tweetbox