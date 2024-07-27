import { ReactTyped } from "react-typed"
import { IoDownloadOutline } from "react-icons/io5";


export const AboutContent = () => {

    const download = () => {

        fetch("../src/assets/Akshay_Resume.pdf").then((response) => {
            response.blob().then((blob) => {

                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "AkshayRajSingh_Resume.pdf";
                alink.click();
            });
        });
    }

    return (
        <>
            <div className="h-dvh  place-items-center grid grid-cols-1  ">
                <div className="h-2/3 w-2/3 xl:h-1/2 py-8 xl:py-2">
                    <div className="grid place-items-center gap-4 ">
                        <ReactTyped className="text-green-500 text-2xl md:text-5xl" strings={["Hey There!!!"]}
                            startWhenVisible
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={5}

                        />
                        <h1 className="text-white text-2xl md:text-5xl text-center">Welcome to my Portfolio</h1>
                        <p className="text-white mt-4 text-center">I am Akshay Raj Singh, and I will be guiding you towards this website, so lets take a look</p>
                        <button className="bg-green-500 text-white text-s md:text-xl p-2 rounded-md mt-4" onClick={download}><div className="flex gap-1">Resume <IoDownloadOutline size={20} className="mt-1" /></div></button>
                    </div>

                </div>

            </div>
        </>
    )
}