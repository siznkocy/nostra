import React from "react";
import NotificationBanner from "./NotificationBanner";
import Navbar from "./navbar/Navbar";

export default function Header() {
  return (
    <header>
      <NotificationBanner />
      <Navbar />
    </header>
  );
}
