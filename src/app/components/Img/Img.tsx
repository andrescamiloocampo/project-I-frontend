import Image from 'next/image';
import { ImgM } from './Img.model';
import styles from './Img.module.css';
import {type cssVar} from '../types/cssVar';
import React from 'react';

export const Img = ({
	width,
	height,
	src,
	alt,
	borderRadius,
	className,
}: ImgM): React.ReactElement => {
	const stylesDiv: cssVar = {
		'--width': width,
		'--height': height,
		'--borderRadius': borderRadius,
	};
	const stylesImg: cssVar = {
		'--borderRadius': borderRadius,
	};
	return (
		<div style={stylesDiv} className={styles.div}>
			<Image
				src={src}
				alt={alt}
				fill
				style={stylesImg}
				className={`${styles.img} ${className}`}
			/>
		</div>
	);
};
