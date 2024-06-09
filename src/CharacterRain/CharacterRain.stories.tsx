import type { Meta, StoryObj } from '@storybook/react';

import CharacterRain from "./CharacterRain";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CharacterRain> = {
	title: 'CharacterRain',
	component: CharacterRain,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	name: 'example',
	render: () => <CharacterRain height={600} />
};