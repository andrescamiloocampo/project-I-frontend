import { type ReactElement } from 'react';
import styles from './LinearProgressIndicator.module.css';
import clsx from 'clsx';

interface LinearProgressIndicatorProps {
	value: number;
	max?: number;
}

export const LinearProgressIndicator = ({
	value,
	max = 100,
}: LinearProgressIndicatorProps): ReactElement => {

	const colorClass = clsx({
		[styles.low]: value <= 15,
		[styles.mediumLow]: value > 15 && value <= 25,
		[styles.medium]: value > 25 && value <= 40,
		[styles.mediumHigh]: value > 40 && value <= 55,
		[styles.high]: value > 55 && value <= 70,
		[styles.veryHigh]: value > 70 && value <= 85,
		[styles.ultraHigh]: value > 85 && value <= 100,
		[styles.ultraHigh]: value >= 100,
	  });

	return (
		<div
			className={`${styles.wrapper}`}
			aria-valuemax={max}
			aria-valuemin={0}
			aria-valuenow={value}
			aria-valuetext={`${value}%`}
			role='linearprogressindicator'
		>
			<div
				className={`${styles.bar} ${colorClass}`}
				style={{ transform: `translateX(-${100 - (value / max) * 100}%)` }}
			/>
			{value}
		</div>
	);
};
