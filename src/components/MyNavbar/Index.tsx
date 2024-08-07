import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./Logo";

export default function App() {
  const menuItems = [
    <ul className="text-green-500 font-bold flex flex-col p-4">
      <li className="hover:underline underline-offset-4 text-lg py-4">
        <Link href="/">HOME</Link>
      </li>
      <li className="hover:underline underline-offset-4 text-lg py-4">
        <Link href="/">ABOUT</Link>
      </li>
      <li className="hover:underline underline-offset-4 text-lg py-4">
        <Link href="/">SKILL</Link>
      </li>
      <li className="hover:underline underline-offset-4 text-lg py-4">
        <Link href="/">PROJECT</Link>
      </li>
      <li className="hover:underline underline-offset-4 text-lg py-4">
        <Link href="/">CONTACT</Link>
      </li>
    </ul>,
  ];

  return (
    <Navbar disableAnimation isBordered className="bg-gray-900">
      <NavbarContent className="sm:hidden text-green-500" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit text-xl text-white underline underline-offset-4 animate-fadeIn">
            PORTFOLIO
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-extrabold text-inherit text-2xl text-white underline underline-offset-4 animate-fadeIn">
            PORTFOLIO
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className="text-gray-200 font-extrabold hover:underline underline-offset-4 hover:decoration-green-500 animate-fadeIn"
          >
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="/"
            aria-current="page"
            className="text-gray-200 font-extrabold hover:underline underline-offset-4 hover:decoration-green-500 animate-fadeIn"
          >
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className="text-gray-200 font-extrabold hover:underline underline-offset-4 hover:decoration-green-500 animate-fadeIn"
          >
            SKILL
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className="text-gray-200 font-extrabold hover:underline underline-offset-4 hover:decoration-green-500 animate-fadeIn"
          >
            PROJECT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className="text-gray-200 font-extrabold hover:underline underline-offset-4 hover:decoration-green-500 animate-fadeIn"
          >
            CONTACT
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
