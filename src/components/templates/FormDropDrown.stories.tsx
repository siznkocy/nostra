import { Meta, StoryObj } from "@storybook/react";
import FormDropDown from "./FormDropDown";

const meta: Meta<typeof FormDropDown> = {
  title: "templates/FormDropDown",
  component: FormDropDown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormDropDown>;

export const Empty: Story = {
  render: (args) => <FormDropDown {...args}></FormDropDown>,
  args: {
    icons: <div>icons here</div>,
    children: <div>input goes here!</div>,
  },
};
