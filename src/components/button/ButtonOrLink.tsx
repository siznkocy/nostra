import Link from "next/link";
import React, { ComponentProps } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { BsArrowRight, BsTrash3 } from "react-icons/bs";
import { IconType } from "react-icons/lib";

type ButtonOrLinkProps = ComponentProps<"button"> &
  ComponentProps<typeof Link> &
  ComponentProps<"a">;
/**
 * Make use of
 */

export interface Props extends Partial<ButtonOrLinkProps> {}

function ButtonOrLink({ href, ...props }: Props) {
  const isLink = typeof href !== "undefined";
  const ButtonOrLink = "button";

  let content = <ButtonOrLink {...props} />;

  if (isLink) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}

export default ButtonOrLink;
