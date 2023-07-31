import React, { ComponentProps } from "react";
// import {} from "@react-icons/"

/**
 * @param {children: ReactNode, title: String} required
 * @returns border box with a box title
 */

type borderBoxProps = ComponentProps<"section">;

export interface Props extends borderBoxProps {
  appendClass?: string;
}

function BorderBox({ appendClass, ...props }: Props) {
  //! append className to the predefined className to preset the default style
  return (
    <section
      className={[
        appendClass,
        "p-3 border rounded-md flex flex-col gap-2",
      ].join(" ")}
      {...props}
    />
  );
}

export default BorderBox;
