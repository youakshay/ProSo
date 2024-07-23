import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FiMinimize2 } from "react-icons/fi";

export const Navbar = () => {

    const [tabOpen, setTabOpen] = useState(false)

    return (
        <>
            <div className='h-12 w-screen rounded-md flex justify-between items-center'>
                <div className='p-2 w-max  text-slate-200 font-semibold flex overflow-hidden gap-2'>
                    <img src='../src/assets/dp.jpg' className='h-8 w-8 rounded-full object-scale-down object-center' alt='' />
                    <p className='mt-1'>Akshay Raj Singh</p>

                    <div className={`${tabOpen ? "hidden" : "scale-100"} absolute right-2 md:hidden`}>
                        <FiAlignJustify size={20}  onClick={() => setTabOpen(true)} />
                    </div>

                    <div className={`${!tabOpen ? "hidden" : "scale-100"} absolute right-2 md:hidden`}>
                        <FiMinimize2 size={20}  onClick={() => setTabOpen(false)} />
                    </div>

                    <div className="hidden md:flex text-white ">
                        <ul className=" ml-4 mt-1 flex justify-between items-center gap-4">
                            <li>About</li>
                            <li>Experience</li>
                            <li>Technologies</li>
                            <li>Education</li>
                        </ul>
                    </div>


                    <div className={`${!tabOpen ? "right-[-200px]" : "right-12 scale-100"} absolute duration-500 2xl:hidden xl:hidden `}>
                        <ul className="">
                            <li className="p-1 border-b">About</li>
                            <li className="p-1 border-b">Experience</li>
                            <li className="p-1 border-b">Technologies</li>
                            <li className="p-1">Education</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}