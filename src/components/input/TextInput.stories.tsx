import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./Input";
import { BiSearch } from "react-icons/bi";

const meta: Meta<typeof TextInput> = {
  title: "input/TextInput",
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const LabelInput: Story = {
  args: {
    intent: "active",
    label: "input",
  },
};

export const NoLabelInput: Story = {
  args: {
    intent: "active",
    placeholder: "label",
    children: <BiSearch />,
  },
};
