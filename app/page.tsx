"use client";

import Image from "next/image";
import banner from "../public/banner.jpg";
import About from "./about/page";
import Service from "./service/page";
import Experience from "./experience/page";
import { Button } from "./components/Button";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./contact/page";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
      });

      gsap.from(aboutRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        duration: 1,
      });

      gsap.from(serviceRef.current, {
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        duration: 1,
      });

      gsap.from(expRef.current, {
        scrollTrigger: {
          trigger: expRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        duration: 1,
      });
    });

    return () => ctx.revert(); // cleanup when leaving page
  }, []);

  return (
    <div>
      <section
        ref={heroRef}
        className="relative h-[600px] w-full overflow-hidden"
      >
        <Image
          src={banner}
          alt="BannerImg"
          fill
          className="object-cover absolute inset-0 z-0"
          priority
        />

        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 flex flex-col items-start justify-center h-full text-white px-6 gap-4 mt-20">
          <span className="bg-primary px-4 py-1.5 rounded-full text-xs uppercase">
            Frontend Developer
          </span>

          <h1 className="text-lg lg:text-4xl font-bold">
            Crafting technical precision with organic
            <br /> elegance.
          </h1>

          <p className="max-w-xl text-gray-200 text-sm lg:text-lg">
            I specialize in building high-performance web applications that
            bridge the gap between complex engineering and sophisticated
            minimalist design.
          </p>

          <div className="flex gap-4 w-96">
            <Button size="sm">View Work</Button>
            <Button size="sm" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      <div id="/about" ref={aboutRef} className="scroll">
        <About />
      </div>

      <div id="service" ref={serviceRef}>
        <Service />
      </div>

      <div id="experience" ref={expRef}>
        <Experience />
      </div>

       <div id="contact" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
