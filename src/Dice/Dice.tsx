export interface FaceProps {
	changeable?: boolean;
}

export interface DiceProps extends FaceProps {
	fixed?: number
}

import { useEffect, useState } from "react";
import styles from "./Dice.module.css";

function One(props: FaceProps) {
	const { changeable } = props;
	return (
		<>
			<span className={styles.dot + " " + styles.r2c2}></span>
		</>
	)
}

function Two(props: FaceProps) {
	const { changeable } = props;
	return (
		<>
			<span className={styles.dot + " " + styles.r1c1}></span>
			<span className={styles.dot + " " + styles.r3c3}></span>
		</>
	)
}

function Three(props: FaceProps) {
	const { changeable } = props;
	return (
		<>
			<span className={styles.dot + " " + styles.r1c1}></span>
			<span className={styles.dot + " " + styles.r2c2}></span>
			<span className={styles.dot + " " + styles.r3c3}></span>
		</>
	)
}

function Four(props: FaceProps) {
	const { changeable } = props;
	return (
		<>
			<span className={styles.dot + " " + styles.r1c1}></span>
			<span className={styles.dot + " " + styles.r1c3}></span>
			<span className={styles.dot + " " + styles.r3c1}></span>
			<span className={styles.dot + " " + styles.r3c3}></span>
		</>
	)
}

function Five(props: FaceProps) {
	const { changeable } = props;
	return (
		<>
			<span className={styles.dot + " " + styles.r1c1}></span>
			<span className={styles.dot + " " + styles.r1c3}></span>
			<span className={styles.dot + " " + styles.r2c2}></span>
			<span className={styles.dot + " " + styles.r3c1}></span>
			<span className={styles.dot + " " + styles.r3c3}></span>
		</>
	)
}

function Six(props: FaceProps) {
	const { changeable } = props;
	return (
		<>
			<span className={styles.dot}></span>
			<span className={styles.dot}></span>
			<span className={styles.dot}></span>
			<span className={styles.dot}></span>
			<span className={styles.dot}></span>
			<span className={styles.dot}></span>
		</>
	)
}

export default function Dice(props: DiceProps) {
	const { changeable, fixed } = props;
	const dices = [<One changeable={changeable} />, <Two />, <Three />, <Four />, <Five />, <Six />];
	const [isRolling, setIsRolling] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);

	// 动画逻辑
	useEffect(() => {
		let intervalId: NodeJS.Timeout;

		if (isRolling) {
			intervalId = setInterval(() => {
				setCurrentIndex(prev => (prev + 1) % 6);
			}, 100); // 每100ms切换一次
		}

		return () => clearInterval(intervalId);
	}, [isRolling]);


	const handleClick = () => {
		if (!isRolling) return;

		// 停止动画
		setIsRolling(false);

		// 生成最终随机结果
		const finalIndex = Math.floor(Math.random() * 6);
		setCurrentIndex(finalIndex);
	};

	return <div className={styles.dice + (!fixed ? (" " + styles.clickable) : "")} onClick={handleClick}>
		{dices[currentIndex]}
	</div>
}