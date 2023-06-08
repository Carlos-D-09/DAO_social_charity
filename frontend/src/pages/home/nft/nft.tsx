import { Link } from "react-router-dom";

type Props = {
	id: string;
	name: string;
};

function NFT({ id, name }: Props) {
	const to = `/nft/${id}`;
	const text = `#${id}`;
	return (
		<Link to={to}>
			<h3>{name}</h3>
			<p>{text}</p>
		</Link>
	);
}

export { NFT };
