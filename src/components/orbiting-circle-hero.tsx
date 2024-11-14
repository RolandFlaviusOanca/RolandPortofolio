import {
  IconBrandGithub,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";
import OrbitingCircles from "./ui/orbiting-circles";
import Image from "next/image";

export function OrbitingCirclesHero() {
  const icons = [
    {
      component: Icons.react,
      size: 45,
      stroke: 1,
      radius: 210,
      duration: 20,
      delay: 2,
    },
    {
      component: Icons.next,
      size: 45,
      stroke: 1,
      radius: 210,
      duration: 20,
      delay: 12,
    },
    {
      component: Icons.typeScript,
      size: 45,
      stroke: 1,
      radius: 160,
      duration: 20,
      delay: 0,
    },
    {
      component: Icons.gitHub,
      size: 45,
      stroke: 1,
      radius: 160,
      duration: 20,
      delay: 8,
    },
  ];

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Image
        src="/me.jpeg"
        className="rounded-full grayscale-[60%] hover:grayscale-0 transition-all duration-300 ease-in-out"
        alt="Profile Picture"
        width={220}
        height={220}
      />

      {icons.map((icon, index) => (
        <OrbitingCircles
          key={index}
          className="size-[60px] border-none bg-transparent"
          radius={icon.radius}
          duration={icon.duration}
          delay={icon.delay}
          reverse
        >
          <icon.component size={icon.size} stroke={icon.stroke} />
        </OrbitingCircles>
      ))}
    </div>
  );
}

const Icons = {
  react: IconBrandReact,
  next: IconBrandNextjs,
  typeScript: IconBrandTypescript,
  gitHub: IconBrandGithub,
};
