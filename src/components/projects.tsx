import { cn } from "@/lib/utils";
import React from "react";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconCaretUpDown,
  IconClipboardCopy,
  IconComponents,
  IconFileBroken,
  IconHelpHexagon,
  IconSignature,
  IconSparkles,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { AnimatedListWrapper } from "./animated-list-wrapper";
import Image from "next/image";

export function Projects() {
  return (
    <BentoGrid className="mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          // className={i === 3  ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const GreenPress = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br relative px-4">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
      style={{
        backgroundImage: "url(/green-press.webp)",
        backgroundSize: "contain",
        backgroundPosition: "bottom", 
      }}
    />
    {/* <p className="w-1/2"><b>GreenPress</b> addresses these challenges by providing a decentralized, no-code platform and marketplace for Web3 creators, builders, and developers. Our solution offers tools to quickly and efficiently launch Blogs, dApps, and DeFi platforms hosted on BNB Greenfield. GreenPress combines the ease of use similar to WordPress with the benefits of decentralization and blockchain technology.</p> */}
  </div>
);

const Transmedica = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br relative px-4">
    <div
      className="absolute inset-0 w-full p-20 h-full rounded-xl pointer-events-none"
      style={{
        backgroundImage: "url(/transmedica.png)",
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image in the container
        backgroundRepeat: "no-repeat", // Prevents repeating the image
      }}
    />
  </div>
);

const Artifik = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br relative px-4">
    <div
      className="absolute inset-0 w-full p-20 h-full rounded-xl pointer-events-none"
      style={{
        backgroundImage: "url(/artifik.jpeg)",
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image in the container
        backgroundRepeat: "no-repeat", // Prevents repeating the image
      }}
    />
  </div>
);

const DefiBuilder = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br relative px-4">
    <div
      className="absolute inset-0 w-full p-20 h-full rounded-xl pointer-events-none"
      style={{
        backgroundImage: "url(/defi.png)",
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image in the container
        backgroundRepeat: "no-repeat", // Prevents repeating the image
      }}
    />
  </div>
);




const items = [
  {
    title: "Testimonials",
    description: "Testimonials",
    header: <AnimatedListWrapper />,
    icon: IconSparkles,
  },
  // {
  //   title: "Transmedica",
  //   description: "Explore the birth of groundbreaking ideas and inventions.",
  //   header: <Transmedica />,
  //   icon: IconComponents ,
  // },
  // {
  //   title: "Modular Builder",
  //   description: "Explore the birth of groundbreaking ideas and inventions.",
  //   header: <DefiBuilder />,
  //   icon: IconComponents ,
  // },
  // {
  //   title: "The journey",
  //   description: "Dive into the transformative power of technology.",
  //   header: <Skeleton />,

  //   icon: IconCaretUpDown ,
  // },

  // {
  //   title: "BusyMachines",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: <Image src='/busy-logo.png' alt='Busy' width={100} height={100} className="mx-auto mt-10" />,
  //   icon: IconComponents ,
  // },
  // {
  //   title: "Green Press",
  //   description: "Join the quest for understanding and enlightenment.",
  //   header: <GreenPress/>,
  //   icon: IconComponents ,

  // },
  // {
  //   title: "Artifik",
  //   header: <Artifik/>,
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   icon: IconComponents ,
  // },
  // {
  //   title: "{ yourProjectName }",
  //   header: <Skeleton />,
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   icon: IconHelpHexagon ,
  // },
];
