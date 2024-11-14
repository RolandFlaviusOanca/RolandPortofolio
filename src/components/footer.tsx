'use client'
import { Col, Container, Row } from "./grid";
import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconPhone,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <Container>
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url(/line-background-footer.webp)",
          backgroundSize: "100% 48%",
          backgroundPosition: "bottom",
        }}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>

      <Row className="items-center">
        <Col lg={8} md={3}>
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/me.jpeg"
              alt="contact-us"
              width={120}
              height={120}
              className="rounded-full grayscale-[60%] hover:grayscale-0"
            />
            <div className="flex flex-col">
              <h3 className="text-6xl font-bold mt-4">Oanca Roland</h3>
              <div className="h-1" />
              <h4 className="text-3xl text-neutral-400">
                Front-end developer
              </h4>
              <div className="h-2" />
              <div className="flex items-center gap-1 text-neutral-500">
                <IconBrandLinkedin
                  stroke={2}
                  className="hover:text-[#14b8a6] w-6 h-6"
                />
                <IconBrandGithub
                  stroke={2}
                  className="hover:text-[#14b8a6] w-6 h-6"
                />
                <IconPhone
                  stroke={2}
                  className="hover:text-[#14b8a6] w-6 h-6"
                />
              </div>
            </div>
          </motion.div>

          <div className="h-8" />
          <motion.div
            className="w-[70%] bg-[#14b8a6] h-0.5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.0, duration: 0.7, ease: "easeOut" }}
          />
          <div className="h-6" />
          <motion.p
            className="text-2xl text-neutral-200 w-[68%] pl-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
          >
            <b>I’m glad you made it this far.</b> If you’d like to get in touch
            or discuss potential opportunities, feel free to reach out.
          </motion.p>
          <div className="h-4" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
          >
            <Button
              variant="outline"
              className="bg-[#14b8a6] rounded-xl border-none text-xl py-2 px-4 h-12 font-bold text-black w-[25%]"
            >
              Let's connect
            </Button>
          </motion.div>
        </Col>

        <Col lg={4} md={3}>
          <motion.div
            className="h-[40rem] w-full flex items-center bg-transparent"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 0.8, ease: "easeOut" }}
          >
            <PinContainer
              title="rolandisdev@gmail.com"
              href="mailto:rolandisdev@gmail.com"
              className="bg-transparent"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24rem] h-[24rem] ml-8">
                <Image
                  src="/contactus.svg"
                  alt="contact-us"
                  width={500}
                  height={400}
                />
              </div>
            </PinContainer>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}