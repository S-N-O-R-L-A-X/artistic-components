import { HTMLAttributes, ReactNode } from "react";
import styles from "./GlassCard.module.css";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	text?: ReactNode;
}

export default function GlassCard(props: GlassCardProps) {
	const { className, title, text, ...rest } = props;
	return (
		<div className={styles.glassCard + " " + className} {...rest}>
			<div className={styles.content}>
				<h2>{title}</h2>
				{text}
				<a href="#">Read More</a>
			</div>
		</div>
	)
}