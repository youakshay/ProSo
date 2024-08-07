import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FiMinimize2 } from "react-icons/fi";
import profile from "../assets/dp.jpg"

export const Navbar = () => {

    const [tabOpen, setTabOpen] = useState(false)

    return (
        <>
            <div className='h-12 p-4 mt-2  w-screen rounded-md flex bg-black items-center'>
                <div className='w-screen  text-slate-200 font-semibold  flex gap-2 justify-between mr-8'>
                    <div className="text-white font-semibold flex gap-4">
                        <img src={profile} className='h-8 w-8 rounded-full object-scale-down object-center' alt='' />
                        <span className='mt-1 text-slate-200'>Akshay Raj Singh</span>
                    </div>


                    <div className={`${tabOpen ? "hidden" : "scale-100"} absolute right-2 md:hidden mr-4`}>
                        <FiAlignJustify size={20} onClick={() => setTabOpen(true)} />
                    </div>

                    <div className={`${!tabOpen ? "hidden" : "scale-100"} absolute right-2 md:hidden mr-4`}>
                        <FiMinimize2 size={20} onClick={() => setTabOpen(false)} />
                    </div>

                    <div className="hidden md:flex text-white">
                        <ul className=" ml-4 mt-1 flex  gap-4">
                            <li>About</li>
                            <li>Experience</li>
                            <li>Projects</li>
                            <li>Education</li>
                        </ul>
                    </div>


                    <div className={`${!tabOpen ? "right-12 scale-x-0" : "right-12 scale-100"} absolute duration-300 xl:hidden `}>
                        <ul className="">
                            <li className="p-1 border-b ">About</li>
                            <li className="p-1 border-b ">Experience</li>
                            <li className="p-1 border-b ">Projects</li>
                            <li className="p-1 border-b">Education</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}