"use client";

import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, ReactNode, useRef } from "react";
import Text from "../text/Text";

// To accommodate other type other than "text": e.g password, email etc
export type inputDefaultProps = ComponentProps<"input">;

type inputCustomProps = {
  /** Input label when label is visible */
  label: string;
};

const InputStyles = cva(
  [
    "flex items-center gap-4 border rounded-md outline-none overflow-clip px-3 py-2",
  ],
  {
    variants: {
      intent: {
        active: "text-black hover:border-blue-500 ",
        danger: "border-red-500 text-red-500",
        disabled: "text-opacity-50",
      },
    },
    defaultVariants: {
      intent: "active",
    },
  }
);

type textInputProps = VariantProps<typeof InputStyles>;
export interface Props
  extends inputCustomProps,
    inputDefaultProps,
    textInputProps {}

/**
 * @param {intent}: 1. active: normal state, 2. danger: input error, 3. disabled
 * @param {length}: half: 42% width, 2. full: 100% parent width
 */

function Input({ intent, label, children, ...props }: Partial<Props>) {
  const inputElement = useRef<HTMLInputElement>(null);

  const focusElement = () => {
    if (inputElement.current) inputElement.current.focus();
  };

  // todo 1 : pass "input" props to "Input Component"
  // todo 2 : add label to Text/Typography

  return (
    <div>
      {label && (
        <Text variant="label/400" className="mx-3 text-black" htmlFor={props?.name}>
          {label}
        </Text>
      )}
      <div className={InputStyles({ intent })} onClick={focusElement}>
        <div className="text-lg text-gray-400">{children}</div>
        <input
          className={"bg-transparent outline-none  w-full h-full text-ellipsis"}
          ref={inputElement}
          id={props?.name}
          {...props}
        />
      </div>
    </div>
  );
}

export default Input;
