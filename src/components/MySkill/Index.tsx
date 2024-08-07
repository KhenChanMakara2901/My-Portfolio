import React from "react";
import Image from "next/image";
import Javascript from "@/public/Skill/Javascript.svg";
import Css from "@/public/Skill/Css.svg";
import Html from "@/public/Skill/Html.svg";
import ReactJs from "@/public/Skill/ReactJs.svg";
import Jquery from "@/public/Skill/Jquery.svg";
import Tailwind from "@/public/Skill/Tailwind.svg";
import Next from "@/public/Skill/Next.svg";
import Figma from "@/public/Skill/Figma.svg";
import Hub from "@/public/Skill/Hub.svg";
import Canva from "@/public/Skill/Canva.svg";
import Photoshop from "@/public/Skill/Photoshop.svg";
import Word from "@/public/Skill/Word.svg";
import Exel from "@/public/Skill/Exel.svg";
import Powerpoint from "@/public/Skill/Powerpoint.svg";
import Outlook from "@/public/Skill/Outlook.svg";

export default function Index() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-left py-10 text-5xl font-semibold underline underline-offset-4 leading-8 text-green-500">
          SKILLS:
        </h2>
        <div className="mx-auto mt-10 items-start grid max-w-lg grid-cols-4 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="Logo"
            src={Html}
            width={60}
            className="ml-14 col-span-2  object-contain lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Css}
            width={60}
            className="ml-14 col-span-2  object-contain lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Javascript}
            width={60}
            className="ml-14 col-span-2 object-contain lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Jquery}
            width={60}
            className="ml-14 col-span-2   object-contain sm:col-start-auto lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Tailwind}
            width={70}
            className="ml-10 col-span-2   object-contain sm:col-start-auto lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={ReactJs}
            width={60}
            className="ml-14 col-span-2  object-contain sm:col-start-2 lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Next}
            width={60}
            className="ml-14 col-span-2  object-contain sm:col-start-2 lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Figma}
            width={50}
            className="ml-14 col-span-2  object-contain sm:col-start-2 lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Canva}
            width={60}
            className="ml-14 col-span-2  object-contain sm:col-start-2 lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Photoshop}
            width={60}
            className="ml-14 col-span-2  object-contain sm:col-start-2 lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Hub}
            width={60}
            className="ml-14 col-span-2  object-contain sm:col-start-2 lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Word}
            width={60}
            className="ml-14 col-span-2  object-contain sm:col-start-2 lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Exel}
            width={60}
            className="ml-14 col-span-2  object-contain sm:col-start-2 lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Powerpoint}
            width={60}
            className="ml-14 col-span-2  object-contain sm:col-start-2 lg:col-span-1 animate-scroll"
          />
          <Image
            alt="Logo"
            src={Outlook}
            width={60}
            className="ml-14 col-span-2  object-contain sm:col-start-2 lg:col-span-1 animate-scroll"
          />
        </div>
      </div>
    </div>
  );
}
