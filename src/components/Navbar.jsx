import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

function Navbar(){

    const[isOpen,setisOpen]=useState(false)

    const buttonHandler=() =>setisOpen(!isOpen)

    return(
        <div className="bg-[#00bbd3] sticky top-0 left-0 ">
            <div className="flex justify-between items-center container mx-auto ">
                <a href="" className="px-[15px] py-[8px] font-ubuntu-condensed text-[36px] text-white flex items-center gap-2">
                    <img src="/images/dumbbell.png" alt="" className="w-[32px] h-[32px]  "/>
                    <span>FlatGym</span>
                </a>
                <button className="py-[8px] pr-[15px] lg:hidden "><FontAwesomeIcon icon={faBars} color='black' widthAuto border onClick={buttonHandler} /> </button>
                <div className='hidden lg:flex justify-between   w-1/3  gap-4 text-white font-ubuntu-condensed   '>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Classes</a>
                    <a href="">Trainers</a>
                    <a href="">Contact</a>
                </div>
            </div>
            <hr className="border-white"/>
            {isOpen&&(
            <div className="font-ubuntu-condensed text-[16px] flex flex-col text-center gap-2 text-white py-3 lg:hidden ">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Classes</a>
                <a href="">Trainers</a>
                <a href="">Contact</a>
            </div>
            )}
        </div>
    )
}
export default Navbar