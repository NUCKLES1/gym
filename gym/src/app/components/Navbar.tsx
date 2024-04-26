
import Image from "next/image";
import dum from "@/assets/images/dum-32.png";
import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";

const Navbar = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#nav", { opacity: 1, y: 0, duration: 1 });
    })


   
  return (
    <div id="nav" className="w-[94%] h-[10%] fixed opacity-0 translate-y-[-5rem] justify-between flex">
      <div className="w-[9%] flex justify-between pt-2">
        <div className="w-[3rem] h-[3rem] gold rounded-full">
          <Image src={dum} alt="" className="ml-2 rotate-[30deg] mt-2" />
        </div>
        <div className="w-[3rem] h-[3rem] bg-black rounded-full"></div>
      </div>
      <ul className="w-[40%] flex justify-between mt-4 bold max-md:hidden">
        <li>home</li>
        <li>about us</li>
        <li>services</li>
        <li>benefits</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
