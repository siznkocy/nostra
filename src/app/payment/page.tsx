"use client";

import Text from "@/components/text/Text";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import BorderBox from "@/components/templates/BorderBox";
import FormDropDown from "@/components/templates/FormDropDown";
import { useFormik } from "formik";
import React from "react";

/**
 * todo:  how to do cart > checkout > payment ?
 *
 * 1. "Select payment method"
 * 2. "Billing address".
 * 3. "Remember my information".
 * 4. "Your order".
 */

// this is a very big form with style in-between
//  [] include label element in the text.
//  [] when one form of payment is accepted disabled the other ones.
export default function Payment() {
  // todo 0: json form section on.
  // todo 1: a state to hold with type of payment to use and include the selected and exclude the not selected.
  //todo 2: input should be required and also handle error and field data validation
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      nameOfCard: "",
      expirationDate: "",
      CVV: "",
      paypalEmail: "",
      paypalUsername: "",
      phoneNumber: "",
      addressLine: "",
      city: "",
      postalCode: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex gap-3">
      <section className="w-4/6 flex flex-col gap-3">
        <BorderBox>
          <Text variant="h5/400">Select payment methods</Text>
          <FormDropDown title="Credit/Debit Card">
            <>
              <Input
                intent={"active"}
                type="text"
                placeholder="Card number"
                id="cardNumber"
                name="cardNumber"
                minLength={13}
                maxLength={16}
                pattern="[\d]{4}-[\d]{4}-[\d]{4}-[\d]{4}"
                onChange={formik.handleChange}
                value={formik.values.cardNumber}
              />
              <Input
                intent={"active"}
                type="text"
                placeholder="Name of card"
                id="nameOfCard"
                name="nameOfCard"
                onChange={formik.handleChange}
                value={formik.values.nameOfCard}
              />
              <div className="grid grid-cols-2 grid-rows-1 gap-2 w-full">
                <Input
                  intent={"active"}
                  placeholder="Expiration date (MM/YY)"
                  id="expirationDate"
                  name="expirationDate"
                  onChange={formik.handleChange}
                  value={formik.values.expirationDate}
                  minLength={4}
                  maxLength={4}
                />{" "}
                <Input
                  intent={"active"}
                  placeholder="CVV"
                  id="CVV"
                  name="CVV"
                  onChange={formik.handleChange}
                  value={formik.values.CVV}
                  minLength={3}
                  maxLength={3}
                />
              </div>
            </>
          </FormDropDown>
          <FormDropDown title="Paypal">
            <>
              <Input
                intent={"active"}
                type="text"
                placeholder="Username"
                id="paypalUsername"
                name="paypalUsername"
                onChange={formik.handleChange}
                value={formik.values.paypalUsername}
              />
              <Input
                intent={"active"}
                type="email"
                placeholder="Email address"
                id="paypalEmail"
                name="paypalEmail"
                onChange={formik.handleChange}
                value={formik.values.paypalEmail}
              />
            </>
          </FormDropDown>
          <FormDropDown title="Neteller">
            <>
              <Input
                intent={"active"}
                type="email"
                placeholder="Email address or Account ID"
                id="netellerEmail"
                name="netellerEmail"
                onChange={formik.handleChange}
                value={formik.values.paypalEmail}
              />
            </>
          </FormDropDown>
        </BorderBox>
        <BorderBox>
          <Text variant="h5/400">Billing Address</Text>
          {/* check input for same as billing address */}
          <Input
            label="phone number*"
            placeholder="Enter your phone number (only digits)"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            id="phoneNumber"
            name="phoneNumber"
          />
          <Input
            label="Street name and house number"
            placeholder="Enter your Street name and house number"
            onChange={formik.handleChange}
            value={formik.values.addressLine}
            id="addressLine"
            name="addressLine"
          />
          <div className="grid grid-cols-2 grid-rows-1">
            <Input
              label="City/Town*"
              placeholder="City"
              onChange={formik.handleChange}
              value={formik.values.city}
              id="city"
              name="city"
            />
          </div>
          <Input
            label="Postal*"
            placeholder="Enter your postal code"
            onChange={formik.handleChange}
            value={formik.values.postalCode}
            id="postalCode"
            name="postalCode"
          />
        </BorderBox>
        <BorderBox></BorderBox>
      </section>
      <section className=" w-2/6">
        <BorderBox>
          <Text variant="h5/400">Billing Address</Text>
          {/* check input for same as billing address */}
          <Input
            label="phone number*"
            placeholder="Enter your phone number (only digits)"
          />
        </BorderBox>
      </section>
    </form>
  );
}
