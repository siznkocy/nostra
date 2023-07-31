import React from "react";
import Text from "../text/Text";
import { Product } from "@/types";
import Image from "next/image";

export default function ProductItem({ ...props }: Product) {
  return (
    <article className="w-4/12 aspect-square bg-gray-200 relative">
      <div className="bottom-0">
        <Text variant="h5/400">{props.name}</Text>
      </div>
    </article>
  );
}
