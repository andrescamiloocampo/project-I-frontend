import { type TextM } from './Text.model';
import styles from './H1.module.css';
import { cssVar } from '../types/cssVar';
import React, { type ReactElement } from 'react';

export const Text = ({
	mText,
	startBoldText,
	endBoldText,
	className,
	fontSize,
	color,
	fontWeight,
	margin,
	padding,
	fontFamily,
	fontVariationSettings,
	background,
	textAlign,
	letterSpacing,
	width,
	height,
	fontStyle,
	lineHeight,
}: TextM): ReactElement => {
	const TextStyles: cssVar = {
		'--font-size': fontSize,
		'--font-variation-settings': fontVariationSettings,
		'--color': color,
		'--font-family': fontFamily,
		'--font-weight': fontWeight,
		'--margin': margin,
		'--padding': padding,
		'--text-align': textAlign,
		'--background': background,
		'--letter-spacing': letterSpacing,
		'--width': width,
		'--height': height,
		'--font-style': fontStyle,
		'--line-height': lineHeight,
	};

	return (
		<p className={`${styles.H} ${className}`} style={TextStyles}>
			<b>{startBoldText}</b>
			{mText}
			<b>{endBoldText}</b>
		</p>
	);
};
