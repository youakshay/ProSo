import leetcode from "../assets/leetcode.png"
import gfg from "../assets/gfg.jpeg"
import github from "../assets/github.jpg"
import linkedin from "../assets/linkedin.jpg"



export const Footer = () => {
    return (
        <>

            <div className="grid grid-cols-2 h-full p-20">
                <div className="border-r grid items-center justify-center">
                    <div className="">
                        <p className="text-xs text-white border-b">Contact me</p>
                        <p className="text-xs text-white mt-1">singhakshayraj32@gmail.com</p>
                        <p className="text-xs text-white mt-1">+91 7488334014</p>
                    </div>
                </div>
                <div className="flex flex-col w-96 justify-center items-center">
                    <div>
                    <p className="text-white col-span-2 text-xs border-b">Important Links</p>
                    <div className="flex gap-1 items-center ">
                        <a href="https://leetcode.com/youakshay" target="_blank"><img src={leetcode} className="h-10 w-10 rounded-full" /></a>
                        <a href="https://www.geeksforgeeks.org/user/youakshay/" target="_blank"> <img src={gfg} className="h-10 w-10 rounded-full object-contain mt-1" /> </a>
                        <a href="https://github.com/youakshay" target="_blank"><img src={github} className="h-14 w-14 rounded-full object-fill" /></a>
                        <a href="https://www.linkedin.com/in/youakshay/" target="_blank"><img src={linkedin} className="h-12 w-12 rounded-full" /></a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}