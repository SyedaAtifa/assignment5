import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex font-Libre">
        <div className="">
            <h2 className="w-[496px] h-[189px] font-bold text-[40px] pt-[158px] pl-[176px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h2>
            <p className="w-[902px] h-[147px] text-[30px] font-medium text-[#787054] pt-[165px] pl-[171px]">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
            <button className="w-[288px] h-[58px] bg-[#A29875] text-white text-[30px] font-medium mt-[180px] ml-[176px] rounded-[10px]">Explore Now</button>
        </div>
        <div className="pt-[68px] pl-[200px]">
            <Image
            src={"/images/jwel.svg"}
            alt="jwellery img"
            width={462}
            height={647}
            />
        </div>
    </div>
  )
}

export default Hero