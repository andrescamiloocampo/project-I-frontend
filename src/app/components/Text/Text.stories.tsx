import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

/**
	General description shown
    in the docs page.
 */

const meta = {
	component: Text,
	title: 'Text',
	parameters: {
		author: 'mpalaciof',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/VGSxZnTGzFuqvDnj8DRwBj/AVENFOR---Components?node-id=1016%3A448&mode=dev',
		},
	},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A description of the component
 *  that's visible on the storybook
 */
export const Default: Story = {
	args: {
		mText: 'Hi Template!',
	},
};

export const AnotherStoryName: Story = {
	args: {
		mText: 'Example with Props',
		color: '#EDEDED',
		fontWeight: '600',
		fontSize: '2rem',
	},
	render: (args) => (
		<>
			<Text {...args}>Hi, im a children</Text>
		</>
	),
};
