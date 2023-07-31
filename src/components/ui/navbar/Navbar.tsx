import React from "react";
import ScreenBox from "../../templates/ScreenBox";
import Logo from "../Logo";
import NavLinks from "./Navbar.json";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";

export default function Navbar() {
  const links = NavLinks.links.map((link, i) => {
    return (
      <Button intent="tertiary" key={i} href={link.href}>
        {link.text}
      </Button>
    );
  });

  return (
    <ScreenBox>
      <nav className="flex items-center justify-between w-full py-2">
        <Logo />
        {/* mobile view */}
        {/* desktop view */}
        {/* links */}
        <article className="flex justify-between">{links}</article>
        {/* product search input */}
        {/* account button */}
        <article className="flex gap-2">
          <Input placeholder={"search"} />
          <Button intent={"tertiary"}>icon1</Button>
          <Button intent={"tertiary"}>icon2</Button>
        </article>
        {/* cart button */}
      </nav>
    </ScreenBox>
  );
}
