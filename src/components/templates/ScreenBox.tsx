import React from "react";

import { Props } from "@/components/templates/BorderBox";

export default function ScreenBox({ appendClass, ...props }: Props) {
  return (
    <section
      className={[appendClass, "max-w-5xl mx-auto"].join(" ")}
      {...props}
    />
  );
}
