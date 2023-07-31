import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, ReactNode } from "react";

type TextProps = ComponentProps<"label"> &
  ComponentProps<"h1"> &
  ComponentProps<"h2"> &
  ComponentProps<"h3"> &
  ComponentProps<"h4"> &
  ComponentProps<"h5"> &
  ComponentProps<"h6"> &
  ComponentProps<"p">;

const textStyles = cva([""], {
  variants: {
    size: {
      h1: "text-[4.5rem]", // 71px
      h2: "text-[3.187rem]", // 51px
      h3: "text-[2.25rem]", // 36px
      h4: "text-[1.625rem]", // 26px
      h5: "text-[1.125rem]", // 18px
      label: "text-[1rem] capitalize", // 16px
      h6: "text-[0.875rem]", // 14px
      p: "text-[0.75rem]", // 12px
    },
    weight: {
      400: "",
      500: "",
      600: "font-semibold",
      700: "font-bold",
    },
    letterSpace: {
      2: "tracking-[2%]",
      4: "tracking-[4%]",
    },
  },
  compoundVariants: [
    { size: ["h1", "h2", "h3", "h4", "h5", "p"], letterSpace: 4 },
    { size: ["h6", "label", "p"], letterSpace: 2 },
  ],
});

type TextStylesProps = VariantProps<typeof textStyles>;

export interface Props
  extends TextProps,
    Omit<TextStylesProps, "size" | "weight"> {
  variant: `${NonNullable<TextStylesProps["size"]>}/${NonNullable<
    TextStylesProps["weight"]
  >}`;
  children?: ReactNode;
  appendClass?: string;
}

export default function Text({
  variant,
  appendClass,
  ...props
}: Omit<Props, "null">) {
  const [size, weight] = variant.split("/") as [
    NonNullable<TextStylesProps["size"]>,
    TextStylesProps["weight"]
  ];

  // select element base on size variant.
  let Text = size;

  let content = (
    <Text
      className={[appendClass, textStyles({ size, weight })].join(" ")}
      {...props}
    />
  );

  return content;
}
