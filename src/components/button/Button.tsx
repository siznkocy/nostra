import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import ButtonOrLink, { Props as ButtonOrLinkProps } from "./ButtonOrLink";

const buttonStyles = cva("flex gap-2 align-middle items-center rounded-md", {
  variants: {
    /** class on the button or Link */
    intent: {
      primary: "text-black",
      secondary: "text-white bg-black",
      tertiary: "text-inherit",
    },
    size: {
      micro: "text-xs",
      small: "text-base",
      base: "text-lg",
    },
    length: {
      normal: "w-fit",
      full: "w-full ",
    },
    justify: {
      between: "justify-between",
      center: "justify-center",
    },
  },
  compoundVariants: [
    {
      intent: ["primary", "secondary"],
      className: "border py-2 px-4",
    },
    {
      intent: ["tertiary"],
      className: "border-none py-1 px-1",
    },
  ],
  defaultVariants: {
    intent: "primary",
    length: "normal",
    size: "base",
    justify: "between",
  },
});

type buttonProps = VariantProps<typeof buttonStyles>;
export interface Props extends ButtonOrLinkProps, buttonProps {
  appendClass: String;
}

function Button({
  intent,
  appendClass,
  length,
  size,
  justify,
  ...props
}: Partial<Props>) {
  return (
    <ButtonOrLink
      className={[
        appendClass,
        buttonStyles({ intent, length, size, justify }),
      ].join(" ")}
      href={props.href}
      {...props}
    />
  );
}

export default Button;
