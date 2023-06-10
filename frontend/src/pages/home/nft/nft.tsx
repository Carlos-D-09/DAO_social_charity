import { Link } from "react-router-dom";
import { getIpfsAddress } from "utils";
import styles from "./NFT.module.scss";

type Props = {
	id: string;
	name: string;
	media: string;
	reference: string;
};

function NFT({ id, name, media, reference }: Props) {
	const to = `/nft/${id}`;
	const src = getIpfsAddress(media);
	const cidRef = reference;
	const text = `#${id}`;
	return (
		<Link to={to}>
			<img src={src} alt={name} className={styles.image} />
			<h3>{name}</h3>
			<p>{text}</p>
			<p>{cidRef}</p>
		</Link>
	);
}

export { NFT };
