import amex from "../assets/amex-logo.jpg"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactTyped } from "react-typed";


export const Experience = () => {

    const data = [
        {
            name: "Amercian Express",
            image: amex,
            role: "Software Engineer Intern",
            period: "Jan 2024 - Jun 2024",
            desc: " Developed a comprehensive Shift Turnover Portal for seamless shift transitions, enabling teams to log and access incidents (INCs), Request for Change (RFCs), email and alerts. Integrated a metrics section to track and analyze INC, RFC, and Problem Ticket data over customizable time ranges, enhancing operational transparency and eTiciency. Utilized Splunk and ELF to monitor server logs, identifying and troubleshooting access issues for key management servers and network facing applications. Ensured optimal performance and security by analyzing log data, addressing potential problems, and maintaining system integrity."
        },
        {
            name: "Amercian Express",
            image: amex,
            role: "Engineer III",
            period: "Aug 2024 - Present",
            desc: "Working presently here "
        }
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className=" w-dvh  grid justify-items-center items-center">
                <div>
                <ReactTyped className="text-green-500 text-2xl md:text-5xl mt-4 font-semibold" strings={["Work Experience"]}
                        startWhenVisible
                        typeSpeed={80}
                        backSpeed={50}
                        backDelay={5}

                    />                </div>
                <div className="w-80 h-full  md:w-2/4  overflow-x-hidden justify-center p-4">
                    <Slider {...settings} className="m-8 gap-4 hover:shadow-[rgb(48,47,47)] hover:shadow-sm rounded-xl hover:scale-[1.025] duration-100">
                        {data.map(item =>
                        (<div className="flex bg-[rgb(48,47,47)] h-96 p-4 rounded-xl text-white ">
                            <div className="basis-1/2 flex justify-center items-center">
                                <img src={item.image} className="h-24 w-24 rounded-full" />
                            </div>
                            <div className="basis-1/2 overflow-auto">
                                <div className=" flex place-content-between border-b">
                                    <p className=" font-semibold text-xl">{item.role}</p>
                                    <p className=" font-semibold text-xl">{item.period}</p>
                                </div>
                                <div className="mt-2 md:scale-100">
                                    <p>{item.desc}</p>
                                </div>
                            </div>

                            <div className="grid justify-center items-center md:hidden">
                                <button className="bg-green-500 h-10 w-16 rounded-md">Details</button>
                            </div>

                        </div>))}
                    </Slider>
                </div>

            </div>
        </>
    )
}
