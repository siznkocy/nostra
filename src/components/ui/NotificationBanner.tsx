import React from "react";
import Text from "../text/Text";
import Button from "../button/Button";
import ScreenBox from "../templates/ScreenBox";

export default function NotificationBanner() {
  return (
    <section className=" w-full bg-black py-1 text-white ">
      <ScreenBox>
        <div className="flex mx-auto w-fit items-center">
          <Text variant="h6/400">
            Sign up and get <span className="font-semibold">GET 20% OFF</span>{" "}
            for your first order.
          </Text>
          <Button appendClass="underline" intent="tertiary" size="small">
            Sign up now
          </Button>
        </div>
      </ScreenBox>
    </section>
  );
}
