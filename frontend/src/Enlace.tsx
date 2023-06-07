import styles from "./components/layout/header/Header.module.scss";

function Enlace({ title }: any) {
	return (
		<div className={styles.link_style}>
			<a href="/register">
				{/* Register your data water */}
				{title}
			</a>
		</div>
	);
}
export { Enlace };
