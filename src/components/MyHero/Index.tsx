"use client";
import React from "react";
import Image from "next/image";
import Photo from "@/public/My-Image/Photo.png";
import CV from "@/public/My-Image/CV.svg";
import Contact from "@/public/My-Image/Contact.svg";
import { ReactTyped } from "react-typed";
import LinkIn from "@/public/Hero/LinkIn.svg";
import Facebook from "@/public/Hero/Facebook.svg";
import Github from "@/public/Hero/Github.svg";
import Telegram from "@/public/Hero/Telegram.svg";
import Link from "next/link";

const PDF_FILE_URL = "http://localhost:3000/CV.pdf";
export default function Index() {
  const downloadfileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 p-5">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10 animate-fadeIn">
        <div>
          <h1 className="mb-2 text-5xl font-bold text-white">
            <span className="text-green-500">Hello👋🏼👋🏼,</span>
            {"I'm"}
            <br />
            <span className="animate-fadeIn texr-xl">
              KHEN <br />
              CHANNMAKARA
            </span>
          </h1>
          <ReactTyped
            strings={[
              "FRONT END DEVELOPER♡♡♡♡♡♡♡♡♡♡",
              "FRONT END DEVELOPER♡♡♡♡♡♡♡♡♡♡",
              "FRONT END DEVELOPER♡♡♡♡♡♡♡♡♡♡",
              "I WILL LOVE YOU FOREVER♡⸝⸝♡⸝⸝♡⸝⸝♡⸝⸝",
              "I LOVE YOU ♡♡♡♡♡♡♡♡♡♡♡♡♡",
            ]}
            typeSpeed={60}
            backSpeed={50}
            loop
            className="mb-6 text-white text-2xl"
          />
          <div className="flex justify-center space-x-5 pt-10">
            <button className="flex w-full items-center text-xl justify-center gap-1 rounded-3xl bg-cyan-900 p-5 py-3 font-semibold text-white hover:bg-white hover:text-gray-800 shadow-2xl shadow-green-500">
              CONTACT ME
              <Image src={Contact} alt="Logo" width={40} />
            </button>
            <button
              onClick={() => {
                downloadfileAtURL(PDF_FILE_URL);
              }}
              className="flex w-full items-center text-xl justify-center gap-2 rounded-3xl bg-white p-5 py-3 font-semibold hover:bg-green-900 hover:text-white shadow-2xl shadow-green-500"
            >
              CURRICULUM VITAE
              <Image src={CV} alt="Logo" width={40} />
            </button>
          </div>
        </div>

        <div className="ml-24 animate-fadeIn">
          <Image
            src={Photo}
            alt="My-Image"
            className="md:size-96 size-80 rounded-full shadow-2xl shadow-blue-500"
          />
        </div>
        <ul className="flex justify-center mt-0 space-x-5 animate-fadeIn">
          <Link
            target="-blank"
            href="https://www.linkedin.com/in/khen-channmakara-1aa043320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="hover:scale-110 shadow-xl shadow-red-400 rounded-full"
          >
            <Image src={LinkIn} alt="Logo" width={50} />
          </Link>

          <Link
            target="-blank"
            href="https://www.facebook.com/profile.php?id=100021293963532&mibextid=LQQJ4d"
            className="hover:scale-110 shadow-xl shadow-blue-400 rounded-full"
          >
            <Image src={Facebook} alt="Logo" width={50} />
          </Link>

          <Link
            target="-blank"
            href="https://github.com/KhenChanMakara2901"
            className="hover:scale-110 shadow-xl shadow-orange-400 rounded-full"
          >
            <Image src={Github} alt="Logo" width={50} />
          </Link>

          <Link
            target="-blank"
            href="https://t.me/RupidSeVen"
            className="hover:scale-110 shadow-xl shadow-indigo-400 rounded-full"
          >
            <Image src={Telegram} alt="Logo" width={50} />
          </Link>
        </ul>
      </div>
    </div>
  );
}
