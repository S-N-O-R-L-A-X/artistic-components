import { CSSProperties, HTMLAttributes } from "react";
import styles from "./SpotlightText.module.css";

export interface SpotlightTextProps extends HTMLAttributes<HTMLDivElement> {
	text?: string;
	backgroundImageURL?: string;
	colors?: {
		startColor: string;
		middleColor?: string;
		endColor: string;
	}
}

export default function SpotlightText(props: SpotlightTextProps) {
	const { backgroundImageURL = "https://images.unsplash.com/photo-1579547621869-0ddb5f237392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", colors, className, text = "Hello World!", ...rest } = props;
	return colors ?
		(
			<div data-spotlight={text} className={styles.spotlight + " " + styles['spotlight-color'] + className} {...rest}>
				{text}
			</div>
		)
		:
		(
			<div data-spotlight={text} style={{ "--background-image": `url(${backgroundImageURL})` } as CSSProperties} className={styles.spotlight + " " + className} {...rest}>
				{text}
			</div >
		)
}