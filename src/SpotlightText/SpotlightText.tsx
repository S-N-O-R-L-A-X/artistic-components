import { CSSProperties, HTMLAttributes } from "react";
import styles from "./SpotlightText.module.css";

export interface SpotlightTextProps extends HTMLAttributes<HTMLDivElement> {
	text?: string;
	backgroundImageURL?: string;
	colors?: string[];
}

export default function SpotlightText(props: SpotlightTextProps) {
	const { backgroundImageURL = "https://images.unsplash.com/photo-1579547621869-0ddb5f237392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", colors, className, text = "Hello World!", ...rest } = props;
	if (colors && colors.length) {
		return (
			<div data-spotlight={text}
				className={styles.spotlight + " " + styles['spotlight-color'] + " " + className}
				style={{ "--spotlight-colors": colors.join(', ') } as CSSProperties}
				{...rest}
			>
				{text}
			</div>
		)
	}

	return (
		<div data-spotlight={text}
			className={styles.spotlight + " " + styles['spotlight-image'] + " " + className}
			style={{ "--spotlight-image": `url(${backgroundImageURL})` } as CSSProperties}
			{...rest}
		>
			{text}
		</div >
	)
}