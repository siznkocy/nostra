import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "button/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1">
      <Button {...args}>{args.label}</Button>
      <Button {...args} state="ARROW" length={"full"}>
        {args.label}
      </Button>
    </div>
  ),

  args: {
    intent: "primary",
    label: "button",
  },
};
export const Secondary: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1">
      <Button {...args}>{args.label}</Button>
      <Button {...args} state="DROPDOWN" length={"full"}>
        {args.label}
      </Button>
    </div>
  ),

  args: {
    intent: "secondary",
    label: "button",
  },
};

export const Tertiary: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1">
      {/* normal size button */}
      <Button {...args} href={".."} state="DROPDOWN">
        {args.label}
      </Button>
      {/* micro size button / link */}
      <Button {...args} size="micro" state="DELETE">
        {args.label}
      </Button>
    </div>
  ),

  args: {
    intent: "tertiary",
    label: "button",
  },
};
