import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FiMinimize2 } from "react-icons/fi";
import profile from "../assets/dp.jpg"
import { Link } from "react-scroll"

export const Navbar = () => {

    const [tabOpen, setTabOpen] = useState(false)

    return (
        <>
            <div className='h-12 p-4 mt-2  w-screen rounded-md flex bg-black items-center fixed z-10'>
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
                            <li className=" cursor-pointer"><Link to="about" activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>About</Link></li>
                            <li className=" cursor-pointer"><Link to="education" spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}>Education</Link></li>
                            <li className=" cursor-pointer"><Link to="experience" spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Experience</Link></li>
                            <li className=" cursor-pointer"><Link to="contacts" spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Contact me</Link></li>                        </ul>
                    </div>

                    <div className={`${!tabOpen ? "right-12 scale-x-0" : "right-12 scale-100"} absolute duration-300 xl:hidden `}>
                        <ul className="">
                            <li className="p-1 border-b "><Link to="about" activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>About</Link></li>
                            <li className="p-1 border-b "><Link to="experience" spy={true}
                                smooth={true}
                                offset={20}
                                duration={500}>Experience</Link></li>
                            <li className="p-1 border-b ">Projects</li>
                            <li className="p-1 border-b "><Link to="education" spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}>Education</Link></li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}