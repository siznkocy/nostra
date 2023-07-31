"use client";

import { Disclosure } from "@headlessui/react";
import React, { ReactNode, useState } from "react";
import Text from "../text/Text";
// import { GoDotFill } from "@react-icons/"

type formDropDownProps = {
  title: String;
  /** inputs field(s) with designed templates */
  children: JSX.Element;
  /** icons for the respective payment logo as designed */
  icons: ReactNode;
};

/**  */
function FormDropDown({ title, children, icons }: Partial<formDropDownProps>) {
  const [dropIndex, setDropIndex] = useState<number>(-1);

  const setIndex = () => {
    console.log("1");
  };

  return (
    <Disclosure as="div" className="border rounded-md">
      {({ open }) => (
        <>
          <Disclosure.Button
            onClick={() => setIndex()}
            className="flex items-center justify-between w-full p-3 border-b"
          >
            {/* ! why it cannot find the react icon module */}
            {/* <GoDotFill
              className={[
                "text-sm",
                open ? "border rounded-full" : "border-none",
              ].join(" ")}
            /> */}
            <Text variant="h5/400">{title}</Text>
          </Disclosure.Button>

          <Disclosure.Panel className="p-3 flex flex-col gap-2" as="div">
            {/* uses children with required format */}
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default FormDropDown;
