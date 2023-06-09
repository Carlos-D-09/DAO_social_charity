import { useAccount } from "@gear-js/react-hooks";
import { useSendNFTMessage } from "hooks/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Enlace } from "Enlace";
import { Button, FileInput, Input } from "@gear-js/ui";
import styles from "./Register.module.scss";

const NftInitialState = {
	pressure: "",
	ph: "",
	residence: "",
};

function Register() {
	const [nftForm, setNftForm] = useState(NftInitialState);
	const [image, setImage] = useState<File | null>(null);
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
		setImage(null);
	};



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
							value={residence}
							onChange={handleInputChange}
						/>
					</li>
					<li>
						<FileInput
							label="Image"
							className={styles.input}
							onChange={(value: File | undefined) => setImage(value || null)}
						/>
					</li>
				</ul>
				<div>
					<Button type="submit" text="Create" className={styles.button} />
					<button type="submit" className={styles.button}>
						Submit
					</button>
				</div>
			</form>
		</>
	);

	/* 	return (
		<>
			<h2 className={styles.heading}> Create NFT</h2>
			<div className={styles.main}>
				<form className={styles.from}>
					...
					<div className={styles.item}>
						<FileInput
							label="image"
							className={styles.input}
							onChange={setImage}
						/>
						{image ? (
							<div className="image-preview">
								<img
									src={URL.createObjectURL(image)}
									alt="nft"
									style={{ width: 100, height: 100 }}
								/>
							</div>
						) : (
							<p>No image set for this NFT</p>
						)}
					</div>
					<Button type="submit" text="Create" className={styles.button} />
				</form>
			</div>
		</>
	); */
}

/* function PreviewNft() {

} */

export { Register };
