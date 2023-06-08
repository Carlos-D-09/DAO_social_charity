/* import { useAccount } from "@gear-js/react-hooks";
import { useSendNFTMessage } from "hooks/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Enlace } from "Enlace"; */
import { useState } from "react";
import { Enlace } from "Enlace";
import styles from "./Register.module.scss";

/* const NftInitialState = {
	pressure: "",
	ph: "",
	residence: "",
}; */

function Register() {
	/* 	const [nftForm, setNftForm] = useState(NftInitialState);
	const { pressure, ph, residence } = nftForm;

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNftForm(prevForm => ({ ...prevForm, [name]: value }));
	};

	const { account } = useAccount();
	const navigate = useNavigate();
	const sendMessage = useSendNFTMessage();

	const resetForm = () => {
		setNftForm(NftInitialState);
	};

	const register = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const tokenMetadata = {
			pressure,
			ph,
			residence,
			reference: "",
		};

		const payload = {
			Mint: {
				to: account?.decodedAddress,
				tokenMetadata,
			},
		};

		sendMessage(payload, {
			onSuccess: () => {
				resetForm();
				navigate("/");
			},
		}); */
	return (
		<>
			<Enlace title="Register your data water" />
			<form className={styles.form} /* action="/" onSubmit={register} */>
				<ul>
					<li>
						<p>Pressure</p>
						<input
							className={styles.input}
							id="pressure"
							type="text"
							required
							/* value={pressure}
							onChange={handleInputChange} */
						/>
						{/* <input type="email" id="mail" name="user_mail"> */}
					</li>
					<li>
						<p>pH</p>
						<input
							className={styles.input}
							id="PH"
							type="text"
							required
							/* value={ph}
							onChange={handleInputChange} */
						/>
					</li>
					<li>
						<p>Residence</p>
						<input
							className={styles.input}
							id="domicilio"
							type="text"
							required
							/* value={residence}
							onChange={handleInputChange} */
						/>
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
