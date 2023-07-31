"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LogIn from "../ui/LogIn";
import SignUp from "../ui/SignUp";

export default function Modal() {
  let [isOpen, setIsOpen] = useState<boolean>(true);

  function closeModal() {
    setIsOpen(false);
  }

  let state = "LOGIN";

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={closeModal}>
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md "
          aria-hidden="true"
        />
        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="mx-auto rounded-md overflow-clip bg-white">
              {/* component pop hierarchy */}
              <SignUp />
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
