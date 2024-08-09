import nitt from "../assets/nitt.jpg"
import cocas from "../assets/cocas.webp"
import { ReactTyped } from "react-typed"

export const Education = () => {
    return (
        <>
            <div className="h-dvh w-dvh">
                <div className="flex justify-center h-max">
                    <ReactTyped className="text-green-500 text-2xl md:text-5xl mt-4 font-semibold" strings={["Education"]}
                        startWhenVisible
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={5}

                    />
                </div>
                <div className="grid md:grid-cols-2  justify-items-center mt-8 h-full w-full">
                    <div className="h-max w-3/4 bg-[rgb(48,47,47)]  xl:h-3/5  xl:w-2/5 flex flex-col rounded-xl hover:scale-[1.02] duration-150">
                        <div className="p-2 flex basis-1/2 md:basis-2/3 object-fill">
                            <img src={nitt} alt="" className="rounded-md" />
                        </div>
                        <div className="p-2">
                            <h1 className="font-semibold text-white border-b">MCA at National Institute of Technology, Trichy</h1>
                            <div className="grid grid-cols-2 mt-1">
                                <p className=" text-white">7.9 CGPA</p>
                                <p className="ml-2 text-white">2021-2024</p>
                            </div>

                        </div>
                    </div>
                    <div className="h-max w-3/4 md:w-2/5 md:h-3/5  flex-col bg-[rgb(48,47,47)]  rounded-xl hover:scale-[1.02]">
                        <div className="p-2 flex  object-cover w-max">
                            <img src={cocas} alt="" className="rounded-md object-cover" />
                        </div>
                        <div className="p-2">
                            <h1 className="font-semibold text-white border-b">BCA at College of Commerce, Arts and Science, Patna</h1>
                            <div className="grid grid-cols-2 mt-1">
                                <p className="text-white">2018-2021</p>
                                <p className="ml-2  text-white">68.73 %</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}