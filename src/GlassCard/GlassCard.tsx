import { ReactNode } from "react";
import styles from "./GlassCard.module.css";

interface GlassCardProps {
	title?: string;
	content?: ReactNode;
}

export default function GlassCard(props: GlassCardProps) {
	const { title, content } = props;
	return (
		<div className={styles.glassCard}>
			<div className={styles.content}>
				<h2>{title}</h2>
				{content}
				<a href="#">Read More</a>
			</div>
		</div>
	)
}