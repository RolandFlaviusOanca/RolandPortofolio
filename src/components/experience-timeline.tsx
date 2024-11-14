'use client'

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import { IconClock, IconFile } from "@tabler/icons-react";

export function ExperienceTimeline() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="https://defibuilder.com/" target="_blank">
                <Image
                  src="/defi-logo.jpeg"
                  alt="defi-logo"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </Link>

              <div>
                <div className="flex items-end gap-3">
                <p className="text-white text-3xl font-bold">DeFi Builder</p>
                {/* <p className="text-white text-lg">- Remote</p> */}
                </div>
                <p className="text-gray-400 text-xl">Front-end developer</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <IconClock stroke={1} className="h-5 w-5"/>
                <p className="text-muted text-sm">5 Months</p>
              </div>
              <div className="h-1" />
              <div className="flex items-center gap-1">
                <IconFile stroke={1} className="h-5 w-5"/>
                <p className="text-muted text-sm">Contractor</p>
              </div>
            </div>
          </div>
          <div className="h-6" />
          <div className="flex gap-3 items-center text-gray-300">
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm ">
              React
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              Next.js
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              TypeScript
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              Web3
            </div>
          </div>
          <div className="h-10" />

          <p>
            Implemented front-end on web3 projects and participated in different
            hackathons
          </p>
          <div className="h-2" />
          <p>
            As the front-end developer for DefiBuilder, I was responsible for
            implementing a sleek, user-friendly interface that guides users
            through creating tokens and launching presales. I integrated chain
            selection, allowing users to easily switch between different
            blockchains, and implemented wallet connections like MetaMask and
            WalletConnect for seamless interaction. I also worked on integrating
            smart contract interactions, ensuring smooth communication between
            the front end and the blockchain for token deployment and presale
            management. My focus was on building a responsive, intuitive UI that
            made complex processes simple for users.
          </p>
          <div className="h-2" />

          <p>Hackathons: BNB-Chain, Neox-Chain, Near-Chain, BlackMagic</p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="https://defibuilder.com/" target="_blank">
                <Image
                  src="/enovatika_logo.jpeg"
                  alt="enovatika_logo"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </Link>

              <div>
                <p className="text-white text-3xl font-bold">Enovatika</p>
                <p className="text-gray-400 text-xl">Front-end developer</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <IconClock stroke={1} />
                <p className="text-muted">8 Months</p>
              </div>
              <div className="h-2" />
              <div className="flex items-center gap-3">
                <IconFile stroke={1} />
                <p className="text-muted">Contractor</p>
              </div>
            </div>
          </div>
          <div className="h-6" />
          <div className="flex gap-3 items-center  text-gray-300">
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm ">
              React
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              Next.js
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              TypeScript
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              Web2
            </div>
          </div>
          <div className="h-10" />

          <p>
            As a front-end developer using React, Next.js, and TypeScript
            projects, I built responsive, high-performance UIs with reusable
            components. I worked on server-side rendering and static site
            generation in Next.js for faster load times and better SEO. Using
            TypeScript, I ensured type safety and cleaner code. I collaborated
            with back-end teams to integrate APIs, managed state with tools like
            Redux, and optimized performance with techniques like lazy loading
            and code splitting to deliver smooth, fast user experiences.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="https://defibuilder.com/" target="_blank">
                <Image
                  src="/busy-logo.png"
                  alt="enovatika_logo"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </Link>

              <div>
                <p className="text-white text-3xl font-bold">BusyMachines</p>
                <p className="text-gray-400 text-xl">Front-end developer</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <IconClock stroke={1} />
                <p className="text-muted"> 1 Year 5 Months</p>
              </div>
              <div className="h-2" />
              <div className="flex items-center gap-3">
                <IconFile stroke={1} />
                <p className="text-muted">Contractor</p>
              </div>
            </div>
          </div>
          <div className="h-6" />

          <div className="flex gap-3 items-center  text-gray-300">
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm ">
              React
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              Next.js
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              TypeScript
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              Web2
            </div>
          </div>
          <div className="h-10" />
          <p>
            As a front-end developer using React, Next.js, and TypeScript
            projects, I built responsive, high-performance UIs with reusable
            components. I worked on server-side rendering and static site
            generation in Next.js for faster load times and better SEO. Using
            TypeScript, I ensured type safety and cleaner code. I collaborated
            with back-end teams to integrate APIs, managed state with tools like
            Redux, and optimized performance with techniques like lazy loading
            and code splitting to deliver smooth, fast user experiences.
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="https://defibuilder.com/" target="_blank">
                <Image
                  src="/apex.jpeg"
                  alt="enovatika_logo"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </Link>

              <div>
                <p className="text-white text-3xl font-bold">
                  Apex Digital Alliance
                </p>
                <p className="text-gray-400 text-xl">Front-end developer</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <IconClock stroke={1} />
                <p className="text-muted"> 1 Year 9 Months</p>
              </div>
              <div className="h-2" />
              <div className="flex items-center gap-3">
                <IconFile stroke={1} />
                <p className="text-muted">Full time</p>
              </div>
            </div>
          </div>
          <div className="h-6" />
          <div className="flex gap-3 items-center  text-gray-300">
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm ">
              HTML 
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              CSS
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              JavaScript
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              PHP
            </div>
          </div>
          <div className="h-10" />
          <p>
            Develop building PHP product sites, implementation from scratch or
            based on a template. Full site config from the acquisition of the
            site to live going through a lengthy and non-trivial setup on
            multiple loads balanced servers and multiple payment gateways etc. I
            am working on a small team at the beginning with only two developers
            to a fully growing team with more than 6 members now.
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="https://defibuilder.com/" target="_blank">
                <Image
                  src="/ejump-logo.jpeg"
                  alt="enovatika_logo"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </Link>

              <div>
                <p className="text-white text-3xl font-bold">eJump Media</p>
                <p className="text-gray-400 text-xl">Front-end developer</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <IconClock stroke={1} />
                <p className="text-muted">4 Months</p>
              </div>
              <div className="h-2" />
              <div className="flex items-center gap-3">
                <IconFile stroke={1} />
                <p className="text-muted">Full time</p>
              </div>
            </div>
          </div>
          <div className="h-6" />
          <div className="flex gap-3 items-center  text-gray-300">
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm ">
              HTML 
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              CSS
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              JavaScript
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              PHP
            </div>
          </div>
          <div className="h-10" />
          <p>
            eJump Media is a web design and web developing agency based in
            Bucharest. For the four past months, I have worked as a web
            developer creating the front-end for different Wordpress projects as
            Griffes(http://griffes.ro/) and also working on an internal project
            for (timesheet) in Angular creating new pages with adding new
            information using PHP Crud and Api's calls.
          </p>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="https://defibuilder.com/" target="_blank">
                <Image
                  src="/infodesign-logo.jpeg"
                  alt="enovatika_logo"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </Link>

              <div>
                <p className="text-white text-3xl font-bold">InfoDesign</p>
                <p className="text-gray-400 text-xl">Front-end developer</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <IconClock stroke={1} />
                <p className="text-muted">3 Years</p>
              </div>
              <div className="h-2" />
              <div className="flex items-center gap-3">
                <IconFile stroke={1} />
                <p className="text-muted">Full time</p>
              </div>
            </div>
          </div>
          <div className="h-6" />
          <div className="flex gap-3 items-center  text-gray-300">
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm ">
              HTML 
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              CSS
            </div>
            <div className="border border-[#14b8a6] font-bold py-2 px-4 rounded-full text-sm">
              JavaScript
            </div>
          </div>
          <div className="h-10" />
          <p>
            As a Front End Developer, I work on the Editaler team which develops
            presentation applications on iPad for Bayer (Xarelto). The main
            responsibility was to create a new template for the slides of the
            application or update the style in order to be perfect pixels for
            many different languages like Spanish, Russian, and Korean. Working
            with HTML, Stylus, and JSON for a referential part, working with Git
            on different branches when the application has more than 2-3 flows.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
