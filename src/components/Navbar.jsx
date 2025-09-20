import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Navbar(){
    return(
        <div className="bg-[#00bbd3] ">
            <div className="flex justify-between items-center">
                <a href="" className="px-[15px] py-[8px] font-ubuntu-condensed text-[36px] text-white flex items-center gap-2">
                    <img src="/images/dumbbell.png" alt="" className="w-[32px] h-[32px]  "/>
                    <span>FlatGym</span>
                </a>
                <button className="py-[8px] pr-[15px] "><FontAwesomeIcon icon={faBars} color='black' widthAuto border /> </button>
            </div>
            <hr className="border-white"/>
            <div className="font-ubuntu-condensed text-[16px] flex flex-col text-center gap-2 text-white py-3">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Classes</a>
                <a href="">Trainers</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}
export default Navbar