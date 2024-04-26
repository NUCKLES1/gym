"use client";
import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import man from "@/assets/images/man.png";
import Navbar from "./Navbar";
import lol from "@/assets/images/lol.gif";

const Section1 = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#man", {
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      top: "120%",
      left: "28%",
      scale: "1.1",
    });

    gsap.to("#move", {
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      width: "50%",
      top: "78%",
      left: "50%",
    });

    gsap.to("#move-text", {
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      marginLeft: "27%",
    });
  });
  return (
    <div className="w-[95%] justify-between section1 h-[100vh]">
      <Navbar />
      <div className="w-full justify-between flex mt-16 h-[85%]">
        <div className="w-[75%] h-[70%] radius backy">
          <p className="text-6xl bold text-white pl-10 pt-16">NEVER</p>
          <p className="text-6xl bold gold-text pl-10">STOP</p>
          <p className="text-6xl bold text-white pl-10">TRAINING</p>
          <button className="gold moveup py-4 px-8 bold text-black ml-12 mt-6 text-2xl radius">
            Get started
          </button>
        </div>
        <div className="backy1 w-[23%] radius h-full"></div>
        <Image
          id="man"
          className="h-full w-[44%] manly absolute man"
          src={man}
          alt=""
        />
      </div>
      <div
        id="move"
        className="flex w-[40%] radius2 relative top-[-22%] whitesmoke h-[22%]"
      >
        <div id="move-text" className="flex w-full">
          <div className=" ml-10 text-2xl mt-5">
            <p>Be part of our</p>
            <p className="bold">happy community</p>
            <p>of customers</p>
          </div>
          <div className="w-[6rem] h-[6rem] bg-black ml-[23%] mt-5 rounded-full">
            <Image
              src={lol}
              className="w-[5rem] h-[5rem] mt-[0.5rem] ml-[0.5rem] rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
