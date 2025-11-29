import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import Dice from "./Dice";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Dice> = {
	title: 'Dice',
	component: Dice,
	args: {

	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	name: 'example',
	render: (args) => <Dice {...args} />
};