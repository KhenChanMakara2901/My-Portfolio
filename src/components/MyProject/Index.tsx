import React from "react";
import Image from "next/image";
import Project from "@/public/Project/Project.png";
import Project1 from "@/public/Project/Project1.png";
import Project2 from "@/public/Project/Project2.png";
import Link from "next/link";

export default function Index() {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h2 className="text-left text-green-500 text-3xl font-bold underline md:text-5xl">
          PROJECTS:
        </h2>
        <p className="msm:text-base mb-8 mt-4 text-center text-sm text-gray-500 md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>

        <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
          <div className="relative flex h-[300px] items-end rounded-3xl">
            <Image
              src={Project}
              alt="Image"
              className="inline-block h-full w-full rounded-3xl object-cover shadow-xl shadow-gray-700"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-3xl bg-cyan-900 px-8 py-4">
              <p className="text-sm text-white font-medium sm:text-xl">
                PLAN B BURGER
              </p>
              <Link
                target="-blank"
                href="https://plan-b-burger.vercel.app/"
                className="text-sm text-white sm:text-base underline hover:scale-105"
              >
                Planbburger.com
              </Link>
            </div>
          </div>

          <div className="relative flex h-[300px] items-end rounded-3xl">
            <Image
              src={Project1}
              alt="Image"
              className="inline-block h-full w-full rounded-3xl object-cover shadow-xl shadow-gray-700"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-3xl bg-cyan-900 px-8 py-4">
              <p className="text-sm font-medium sm:text-xl text-white">
                START UP
              </p>
              <Link
                target="-blank"
                href="https://new-startup-steel.vercel.app/"
                className="text-sm sm:text-base underline text-white hover:scale-105"
              >
                Startup.com
              </Link>
            </div>
          </div>

          <div className="relative flex h-[300px] items-end rounded-3xl">
            <Image
              src={Project2}
              alt="Image"
              className="inline-block h-full w-full rounded-3xl object-cover shadow-lg shadow-white"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-3xl bg-cyan-900 px-8 py-4">
              <p className="text-sm text-white font-medium sm:text-xl">
                KHMER CODE ACADEMY
              </p>
              <Link
                target="-blank"
                href="https://khmercodeacademy.vercel.app/"
                className="text-sm text-white sm:text-base underline hover:scale-105"
              >
                Khmercodeacademy.com
              </Link>
            </div>
          </div>

          <div className="relative flex h-[300px] items-end">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="inline-block h-full w-full rounded-3xl object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-3xl bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Project Name</p>
              <p className="text-sm sm:text-base">Meta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
