'use client'
import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Section3 = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".manly", {
            scrollTrigger: {
              trigger: ".section3",
              start: "top bottom",
              end: "top top",
              scrub: 2,
              immediateRender: false,
            },
            rotate: "30deg",
            top: "90%",
            left: "42%",
            scale: "1.1"
          });

        gsap.to("#stag", {
          scrollTrigger: {
            trigger: ".section2",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          right: 0,
          y: 0,
          stagger: 0.25,
          duration: 1,
        });

        gsap.to("#stagger", {
          scrollTrigger: {
            trigger: ".section2",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          y: 0,
          stagger: 0.25,
          duration: 1,
        });

        gsap.to("#moveout", {
          scrollTrigger: {
            trigger: ".section3",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          left: "-30%",
        });

        gsap.to(".moveright", {
          scrollTrigger: {
            trigger: ".section3",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          left: "40%",
        });

        gsap.to(".moveup", {
          scrollTrigger: {
            trigger: ".section3",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          stagger: 0.25,
          y: "-40%",
          duration: 1,
        });

        gsap.to(".moveups", {
          scrollTrigger: {
            trigger: ".section3",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          stagger: 0.25,
          y: 0,
          duration: 6,
        });

        gsap.to("#move", {
            scrollTrigger: {
              trigger: ".section3",
              start: "top bottom",
              end: "top top",
              scrub: 2,
              immediateRender: false,
            },
            top: "110%",
            width:"55%",
            left: "45%",
          });
      });
  return (
    <div className="w-[95%] section3 justify-between h-[100vh]">
     <div className="w-full justify-between mt-16 h-[85%]">
        <div className='letter text-6xl'>
            <p className="translate-y-40 moveups">Training</p>
            <p className='bold translate-y-40 moveups'>Teachers</p>
        </div>
        <div className='w-full mt-6 gap-[2%] h-[75%] flex'>
         <div className='w-[32%] h-full translate-y-40 moveups relative radius whitesmoke'>
            <div className='mt-12 ml-8'>
                <div className='bg-black bold w-[4rem] translate-y-40 moveups text-center rounded-2xl text-white h-[4rem] text-4xl'>
                <p className='pt-3'>1</p>
                </div>
                <p className='text-3xl mt-3 translate-y-40 moveups'>Introductory</p>
                <p className='text-4xl mt-1 bold translate-y-40 moveups letter'>Training</p>
                <p className='text-[20px] pt-3 translate-y-40 moveups'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Eos placeat nemo itaque <br /> consectetur voluptatem.</p>
            </div>
         </div>
         <div className='w-[32%] h-full translate-y-40 moveups relative radius bg-black'>
            <div className='mt-12 ml-8'>
                <div className='gold text-black bold translate-y-40 moveups w-[4rem] text-center rounded-2xl h-[4rem] text-4xl'>
                <p className='pt-3'>2</p>
                </div>
                <p className='text-3xl gold-text translate-y-40 moveups mt-3'>Training</p>
                <p className='text-4xl mt-1 gold-text translate-y-40 moveups bold letter'>Rating</p>
                <p className='text-[20px] gold-text translate-y-40 moveups thin pt-3'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Eos placeat nemo itaque <br /> consectetur voluptatem.</p>
            </div>
         </div>
         <div className='w-[32%] h-full translate-y-40 moveups relative radius gold'>
            <div className='mt-12 ml-8'>
                <div className='bg-black bold translate-y-40 moveups w-[4rem] text-center rounded-2xl gold-text h-[4rem] text-4xl'>
                <p className='pt-3'>3</p>
                </div>
                <p className='text-3xl mt-3 translate-y-40 moveups'>Purchase a</p>
                <p className='text-4xl mt-1 translate-y-40 moveups bold letter'>Ticket</p>
                <p className='text-[20px] translate-y-40 moveups pt-3'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Eos placeat nemo itaque <br /> consectetur voluptatem.</p>
            </div>
         </div>
        </div>
        </div> 
    </div>
  )
}

//bg-green-500//

export default Section3