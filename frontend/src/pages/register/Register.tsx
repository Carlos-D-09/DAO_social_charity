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

	const day = String(currentDate.getDate()).padStart(2, "0");
	const month = String(currentDate.getMonth() + 1).padStart(2, "0");
	const year = String(currentDate.getFullYear());

	return `${day}-${month}-${year}`;
}

function Register() {
	const { formState, register, handleSubmit, reset } = useForm<Values>({
		defaultValues,
	});
	const { errors } = formState;

	// const alert = useAlert();
	const ipfs = useIPFS();
	// console.log(ipfs);
	const sendMessage = useSendNFTMessage();
	// console.log(sendMessage);

	const resetForm = () => {
		setNftForm(NftInitialState);
		setImage(null);
	};



	return (
		<>
			<h2 className={styles.heading}>Record</h2>
			<div className={styles.main}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.item}>
						<Input
							label="Water Flow"
							className={styles.input}
							{...register("waterFlow", { required: "Water flow is required" })}
						/>
						<p className={styles.error}>{errors.waterFlow?.message}</p>
					</div>

					<div className={styles.item}>
						<Input
							label="Ph"
							className={styles.input}
							{...register("ph", { required: "Ph is required" })}
						/>
						<p className={styles.error}>{errors.ph?.message}</p>
					</div>

					<div className={styles.item}>
						<Input
							label="Residence"
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
