"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Col, Row } from "./grid";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { IconCode, IconMail } from "@tabler/icons-react";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { OrbitingCirclesHero } from "./orbiting-circle-hero";

export default function HeroSection() {
  const title = `Oanca Roland`;
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Client-side code");
    }
  }, []);
  return (
    <Row>
      <Col lg={7} md={6} className="relative">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <IconCode
            stroke={2}
            className="text-[#14b8a6] w-20 h-20 absolute -left-24 -top-20"
          />
        </motion.div>
        <TextGenerateEffect words={title} />
        
        <div className="h-2" />
        <motion.p
          className="text-2xl text-neutral-300 leading-relaxed w-[79%] pl-2"
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 1.4,
              duration: 0.8,
            },
          }}
        >
          I specialize in building dynamic, high-performance web applications
          using <b>React, Next.js, and TypeScript.</b> With over 7 years of
          experience, I focus on creating responsive, user-friendly interfaces
          by translating UI/UX mockups into functional{" "}
          <span className="font-bold border-b-2 border-[#118f88] text-3xl text-neutral-500">
            web applications.
          </span>
        </motion.p>
        <div className="h-8" />
        <div className="flex items-center gap-2">
        {/* <div className="h-4"/>
        <Button variant="outline" className="bg-[#14b8a6] !hover:border-[#14b8a6] rounded-xl border-none text-xl py-2 px-4 h-12 font-bold text-black w-[25%]">Let's connect</Button> */}
        </div>
      </Col>
      <Col lg={5} md={6}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.5,
          }}
        >
          <OrbitingCirclesHero/>
        </motion.div>
      </Col>
    </Row>
  );
}
