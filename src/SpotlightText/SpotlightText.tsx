import { HTMLAttributes } from "react";
import styles from "./SpotlightText.module.css";

export interface SpotlightTextProps extends HTMLAttributes<HTMLDivElement> {
	text?: string;
}

export default function SpotlightText(props: SpotlightTextProps) {
	const { className, text = "Hello World!", ...rest } = props;
	return (
		<div data-spotlight={text} className={styles.spotlight + " " + className} {...rest}>
			{text}
		</div>
	)
}