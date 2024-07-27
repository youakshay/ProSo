export const Education = () => {
    return (
        <>
            <div className="grid xl:grid-cols-2 h-dvh w-dvh">
                <div className="h-max w-3/4 bg-white border-2 xl:h-3/5  xl:w-2/5 flex flex-col place-self-center rounded-xl hover:scale-[1.02] duration-150">
                    <div className="p-2 flex basis-1/2 xl:basis-2/3 object-fill">
                        <img src="../src/assets/nitt.jpg" alt="" className="rounded-md" />
                    </div>
                    <div className="p-2">
                        <h1 className="font-semibold text-slate-500 border-b">MCA at National Institute of Technology, Trichy</h1>
                        <div className="grid grid-cols-2 mt-1">
                            <p className="">7.9 CGPA</p>
                            <p className="ml-2">2021-2024</p>
                        </div>

                    </div>

                </div>
                <div className="h-max  w-3/4 xl:w-2/5 xl:h-3/5 place-self-center flex flex-col  bg-white border-2 rounded-xl hover:scale-[1.02]">
                    <div className="p-2 flex basis-1/2 xl:basis-2/3 object-fill">
                        <img src="../src/assets/cocas.webp" alt="" className="rounded-md" />
                    </div>
                    <div className="p-2">
                        <h1 className="font-semibold text-slate-500 border-b">BCA at College of Commerce, Arts and Science, Patna</h1>
                        <div className="grid grid-cols-2 mt-1">
                            <p className="text-slate-600">2018-2021</p>
                            <p className="ml-2 text-slate-600">68.73 %</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}