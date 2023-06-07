import styles from "./components/layout/header/Header.module.scss";

function Enlace() {
	return (
		<div className={styles.link_style}>
			<a href="/register">
				Register your data water
			</a>
		</div>
	);
}
export { Enlace };
