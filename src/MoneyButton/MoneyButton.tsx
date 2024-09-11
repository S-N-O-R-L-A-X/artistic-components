import { ButtonHTMLAttributes } from "react";
import styles from "./MoneyButton.module.css";

export default function MoneyButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
	const { className, children, ...rest } = props;
	return (
		<button className={styles.money + " " + className} {...rest}>{props.children}
			<span className={styles.background}>
				{new Array(10).fill(0).map((_, idx) =>
					<i key={idx}
						style={{
							position: 'absolute',
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							transform: `rotate(${Math.floor(Math.random() * 180)}deg)`
						}}></i>)}
			</span>
		</button>
	)
}
