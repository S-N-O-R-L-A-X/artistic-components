import { PropsWithChildren } from "react";
import styles from "./MoneyButton.module.css";

export default function MoneyButton(props: PropsWithChildren) {
	return (
		<button className={styles.money}>{props.children}
			<span className={styles.background}>
				{new Array(10).fill(0).map((_, idx) => <i key={idx}></i>)}
			</span>
		</button>

	)
}