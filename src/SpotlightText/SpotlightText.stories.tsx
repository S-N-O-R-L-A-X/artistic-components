import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import SpotlightText from "./SpotlightText";
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'SpotlightText',
	component: SpotlightText,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		style: { backgroundColor: { control: 'color' } }
	},
} satisfies Meta<typeof SpotlightText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: "example content",
	},
};