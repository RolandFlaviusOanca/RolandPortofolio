'use client';
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import Image from "next/image";
import { IconEye } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface Item {
  name: string;
  description: string;
  firstParagraph: string;
  secondParagraph?: string;
  endParagraph?: string;
  img: string;
}

const notifications: Item[] = [
  {
    name: "Vlad Spilca",
    description: "CTO, BusyMachines",
    firstParagraph: `
      To whom it may concern, It’s my absolute pleasure to recommend Roland Oanca for the position of Software Engineer. Roland and I worked together at BusyMachines for more than 1 year. I thoroughly enjoyed my time working with Roland, and came to know him as a truly valuable asset to absolutely any team. He is honest, dependable, and incredibly hard-working. Beyond that, he is an impressive communicator who always gets the message across. Without a doubt, I confidently recommend Roland to join your team. As a dedicated and knowledgeable employee and an all-around great person, I know that he will be a beneficial addition to your organization.
    `,
    secondParagraph:
      "Please feel free to contact me at spilca.vlad@gmail.com should you like to discuss Roland’s qualifications and experience further. I’d be happy to expand on my recommendation.",
    endParagraph: "Best wishes, Vlad Spilca, CTO BusyMachines",
    img: "/busy-logo.png",
  },
  {
    name: "Alexe Luca Spataru",
    description: "CTO, DefiBuilder",
    firstParagraph:
      "I am pleased to recommend Roland Oancă, a skilled Front-End Developer with over 7 years of experience, for any role that values a detail-oriented professional with a strong ability to translate UI/UX mockups into seamless, functional interfaces. Roland’s attention to detail and understanding of design principles make him an invaluable asset, especially in projects requiring a high degree of visual fidelity.",
    secondParagraph:
      "I highly recommend Roland for roles where attention to detail and commitment to timely delivery are essential. For further insights, please feel free to reach out.",
    img: "/defi-logo.jpeg",
  },
  {
    name: "Paul Mihai",
    description: "CTO, Apex Digital",
    firstParagraph: `
      To whom it may concern, My name is Paul Mihai, and I have been working alongside Roland Oanca at Apex Digital, at first as his colleague and then as CTO of the company for more than 1 year now. He started with us as a front-end dev and slowly evolved on and off the job to do full site config from the acquisition of the site to live going through a lengthy and non-trivial setup on multiple load-balanced servers and multiple payment gateways. His experience with us was accrued building 30+ PHP product sites, implementation from scratch or based on a template. I recommend him because of his experience and keen interest in learning new stuff and evolving beyond the job. I am confident that with the right mentorship, he will evolve into a very good full-stack developer. Ready to help his colleagues, he always tries to get stuff done even if at times the enthusiasm gets the better of him.
    `,
    secondParagraph:
      "For any questions and clarifications you might need, do not hesitate to contact me at: asdfpaul@yahoo.com or 0040745758568 (between 10:00-20:00 Romanian time).",
    endParagraph: "Sincerely, Paul Mihai, CTO Apex Digital",
    img: "/apex.jpeg",
  },
];

export default function Testimonials() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
          console.log('Client-side code');
        }
      }, []);
  return (

        <div className="flex flex-col gap-4">
          {notifications.map((item, index) => (
            <Drawer key={index}>
              <DrawerTrigger asChild>
                <div
                  className={cn(
                    "group relative mx-auto h-[100px] w-full cursor-pointer overflow-hidden rounded-[18px] py-3 px-3",
                    "transition-all duration-200 ease-in-out hover:scale-[102%]",
                    "bg-transparent border-neutral-700 hover:border-[#14b8a6] border-2",
                    "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                    "flex justify-center items-center"
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
                      src={item.img}
                      alt={`${item.name} avatar`}
                      className="w-16 h-16 rounded-xl"
                      width={80}
                      height={80}
                    />
                    <div className="flex flex-col w-full overflow-hidden">
                      <div className="flex w-full justify-between items-center">
                        <p className="text-2xl font-bold">{item.name}</p>
                        <IconEye
                          stroke={1.5}
                          className={cn(
                            "text-neutral-500 transition-colors duration-200 w-8 h-8",
                            "group-hover:text-[#14b8a6]"
                          )}
                        />
                      </div>
                      <p className="text-xl font-normal text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </DrawerTrigger>

              <DrawerContent className="bg-neutral-900 !rounded-3xl border-none pl-20 h-[60%]">
          

              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{
                  backgroundImage: "url(/line-background-footer.webp)",
                  backgroundSize: "100% 60%",
                  backgroundPosition: "bottom",
                  opacity: 0.1,
                }}
              />
    
                <DrawerHeader className="w-[70%] mx-auto">
              <div className="flex items-center gap-5 w-1/2 mt-10">
                <Image
                  src={item.img}
                  alt={`${item.name} avatar`}
                  className="w-20 h-20 rounded-xl"
                  width={120}
                  height={120}
                />
                <div className="flex flex-col ">
                  <DrawerTitle className="text-4xl leading-relaxed">{item.name}</DrawerTitle>
                  <span className="text-2xl text-neutral-500 pl-1 leading-relaxed">
                    {item.description}
                  </span>
                </div>
              </div>
              <div className="h-4"/>
              
              <DrawerDescription className="w-[90%]  text-neutral-300">
                <span className="text-2xl leading-relaxed">{item.firstParagraph}</span>
                <div className="h-4"/>
                <span className="text-2xl leading-relaxed">{item.secondParagraph}</span>
                <div className="h-4"/>
                {item.endParagraph && (
                  <span className="text-2xl font-bold">{item.endParagraph}</span>
                )}
              </DrawerDescription>
            </DrawerHeader>
              </DrawerContent>
            </Drawer>
          ))}
        </div>

  );
}
