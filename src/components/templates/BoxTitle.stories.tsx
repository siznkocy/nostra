import { Meta, StoryObj } from "@storybook/react";
import BoxTitle from "./BorderBox";

const meta: Meta<typeof BoxTitle> = {
  title: "templates/BoxTitle",
  component: BoxTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BoxTitle>;

export const BoxTitleStateCard: Story = {
  args: {
    children: <div>box Content here!</div>,
  },
};

export const BoxTitleTitle: Story = {
  args: {},
};
