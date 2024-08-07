import React from "react";
import Image from "next/image";
import Web from "@/public/My-Image/Web.png";
import Design from "@/public/My-Image/Design.png";
import Microsoft from "@/public/My-Image/Microsoft.png";

export default function Index() {
  return (
    <div className="h-full bg-gray-900  text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-cyan-900 shadow-2xl  overflow-hidden rounded-3xl">
            <Image
              src={Web}
              alt="Image-Web"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-green-500 mb-2">
                WEB DEVELOPMENT
              </h3>
              <p className="text-white mb-4 two-lines">
                Knowledge with Language Like: <br />
                HTML/CSS,JAVASCRIPT/JQUERY,TAILWIND.CSS <br />
                Framworks With REACT.JS AND NEXT.JS
              </p>
              <a
                href="#"
                className="inline-block bg-white hover:scale-110 text-gray-900 px-4 py-2 rounded-3xl"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-cyan-900 shadow-2xl rounded-3xl  overflow-hidden">
            <Image
              src={Design}
              alt="Heroicons"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-green-500 mb-2">
                DESINGER
              </h3>
              <p className="text-white mb-4 two-lines">
                Knowledge With: <br />
                FIGMA,CANVA,PHOTOSHOP,AND WORLFLOW.
              </p>
              <a
                href="#"
                className="inline-block bg-white hover:scale-110 text-gray-900 px-4 py-2 rounded-3xl"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-cyan-900 shadow-2xl rounded-3xl  overflow-hidden">
            <Image
              src={Microsoft}
              alt="Image"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-green-500 mb-2">
                MICROSOFT OFFICE
              </h3>
              <p className="text-white text-sm mb-4 two-lines ">
                Knowledge With:
                <br />
                MICROSOFT.WORK,POWERPOINT,MICROSOFT.EXEL AND OUTLOOK.
              </p>
              <a
                href="#"
                className="inline-block bg-white hover:scale-105 text-gray-900 px-4 py-2 rounded-full"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
