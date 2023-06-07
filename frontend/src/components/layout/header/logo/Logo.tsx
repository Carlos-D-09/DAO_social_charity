import { Link } from "react-router-dom";
import { ReactComponent as SVG } from "assets/images/logo.svg";
import styles from "../Header.module.scss";

function Logo() {
	return (
		<Link to="/">
			<h1 className={styles.logo}>WATTER SUPPORT</h1>
		</Link>
	);
}

export { Logo };
