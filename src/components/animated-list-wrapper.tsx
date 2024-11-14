"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "./ui/animated-list";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";
import Link from "next/link";
import {
  IconEye,
  IconEyeFilled,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";



notifications = Array.from({ length: 10 }, () => notifications).flat();
const Notification = ({
  name,
  description,
  firstParagraph,
  endParagraph,
  secondParagraph,
  img,
}: Item) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <figure
          className={cn(
            "group relative mx-auto h-[100px] w-full max-w-[400px] cursor-pointer overflow-hidden rounded-[18px] py-3 px-3",
            "transition-all duration-200 ease-in-out hover:scale-[102%]",
            "bg-transparent border-neutral-700 hover:border-[#14b8a6] border-2 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            "flex justify-center items-center" // Add these classes to center content
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: "url(/line-background-footer.webp)",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              opacity: 0.2,
            }}
          />
          <div className="flex flex-row items-center gap-3 w-full justify-center">
            <Image
              src={img}
              alt={`${name} avatar`}
              className="w-16 h-16 rounded-xl"
              width={80}
              height={80}
            />
            <div className="flex flex-col w-full overflow-hidden">
              <div className="flex w-full justify-between items-center">
                <p className="text-2xl font-bold">{name}</p>
                <IconEye
                  stroke={1.5}
                  className={cn(
                    "text-neutral-500 transition-colors duration-200 w-8 h-8",
                    "group-hover:text-[#14b8a6]"
                  )}
                />
              </div>
              <p className="text-xl font-normal text-neutral-500">
                {description}
              </p>
            </div>
          </div>
        </figure>
      </DialogTrigger>

      <DialogContent className=" bg-neutral-900 !rounded-3xl border-none w-[45%] pl-20">
        <div className="h-2" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat  pointer-events-none"
          style={{
            backgroundImage: "url(/line-background-footer.webp)",
            backgroundSize: "100%",
            backgroundPosition: "bottom",
            opacity: 0.1,
          }}
        />
        <DialogHeader>
          <div className="flex items-center gap-5">
            <Image
              src={img}
              alt={`${name} avatar`}
              className="w-20 h-20 rounded-xl"
              width={120}
              height={1200}
            />
            <div className="flex flex-col">
              <DialogTitle className="text-4xl">{name}</DialogTitle>
              <div className="h-1" />
              <p className="text-2xl text-neutral-500 pl-1">{description}</p>
            </div>
          </div>
          <DialogDescription className="w-[90%] pl-28 text-neutral-300 ">
            <p className="text-lg">{firstParagraph}</p>
            <div className="h-4" />
            <p className="text-lg">{secondParagraph}</p>
            <div className="h-4" />
            <p className="text-2xl font-bold">{endParagraph}</p>
          </DialogDescription>
          <div className="h-2" />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export function AnimatedListWrapper({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col px-1 py-1 overflow-hidden rounded-lg bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList delay={6000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
