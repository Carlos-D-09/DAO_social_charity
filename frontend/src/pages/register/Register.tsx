import { Enlace } from "Enlace";
import styles from "./Register.module.scss";

function Register() {
	return (
		<>
		<Enlace title="Register your data water"/>
			<form className={styles.form} action="/" method="post">
				<ul>
					<li>
						<p>Presion</p>
						<input className={styles.input} id="p" type="text" />
						{/* <input type="email" id="mail" name="user_mail"> */}
					</li>
					<li>
						<p>PH</p>
						<input className={styles.input} id="PH" type="text" />
					</li>
					<li>
						<p>Domicilio</p>
						<input className={styles.input} id="domicilio" type="text" />
					</li>
				</ul>
				<div>
					<button type="submit" className={styles.button}>
						Submit
					</button>
				</div>
			</form>
		</>
	);
}

export { Register };
