import { Loader } from "components";
import { GetAllExtrinsics } from "components/GetAllExtrinsics";
import { SendMessage } from "components/SendMessage";
import { useNFTs } from "hooks/api";
import { Enlace } from "Enlace";
import { ReadState } from "components/ReadState";
import { Link } from "react-router-dom";
import { GearApi } from "@gear-js/api";
import { useState } from "react";
import { Button } from "@gear-js/ui";
import faker from "faker";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./Home.module.scss";
import arrow from "../../assets/images/arrow.png";
import { NFT } from "./nft/nft";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options1 = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "Pressure",
			padding: {
				top: 10,
				bottom: 30,
			},
			font: { size: 26 },
		},
	},
};

export const options2 = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "pH",
			padding: {
				top: 10,
				bottom: 30,
			},
			font: { size: 26 },
		},
		LinearScale: {
			y: {
				min: -25,
				max: 100,
			},
			x: {
				ticks: { color: "rgba(0, 220, 195)" },
			},
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
ChartJS.defaults.borderColor = "#0C2650";
ChartJS.defaults.color = "#ECECEC";
export const data1 = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "#0C2650",
			fill: true,
		},
		{
			label: "Dataset 2",
			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

export const data2 = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "#0C2650",
			fill: true,
		},
		{
			label: "Dataset 2",
			data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

//-----------------------------------------------------------
// Empiza codigo del componente Home
function Home() {
	const [chainData, setChain] = useState<string>();
	const [nodeNameData, setNodeName] = useState<string>();
	const [nodeVersionData, setNodeVersion] = useState<string>();

	const nodeInformation = async () => {
		const gearApi = await GearApi.create({
			providerAddress: "wss://rpc-node.gear-tech.io",
		});

		const [chain, nodeName, nodeVersion] = await Promise.all([
			gearApi.chain(),
			gearApi.nodeName(),
			gearApi.nodeVersion(),
		]);

		setChain(chain);
		setNodeName(nodeName);
		setNodeVersion(nodeVersion);
	};

	/* 	const nfts = useNFTs();
	const { nfts: state, isNftStateRead: isStateRead } = useNFTs();
	const isAnyNft = !!nfts?.length;

	const getNFTs = () =>
		nfts?.map(({ name, id, media }) => (
			<li key={id}>
				<NFT id={id} name={name} media={media} />
			</li>
		)); */

	const { nfts, isNftStateRead: isStateRead } = useNFTs();
	const isAnyNft = nfts && nfts.length > 0;

	const getNFTs = () => {
		if (nfts) {
			return nfts.map(({ name, id }) => (
				<li key={id}>
					<NFT id={id} name={name} />
				</li>
			));
		}
		return null;
	};

	return (
		<>
			<Enlace title="Water Statistics" />
			<div className="card">
				<h3>Node Data</h3>
				<p>Red: {chainData}</p>
				<p>Nodo: {nodeNameData}</p>
				<p>Version del nodo:{nodeVersionData}</p>
				<Button text="Get Node Information" onClick={nodeInformation} />
				<ReadState />
				{isStateRead ? (
					<>
						{isAnyNft && <ul className={styles.list}>{getNFTs()}</ul>}
						{!isAnyNft && <h2>There are no NFTs at the moment</h2>}
					</>
				) : (
					<Loader />
				)}
				<SendMessage />
				<GetAllExtrinsics />
			</div>
			<div className={styles.fondo}>
				<div className={styles.container_btn_register}>
					<img className={styles.arrow} src={arrow} alt="" />
					<Link to="/register">
						<button className={styles.button} type="button">
							Register
						</button>
					</Link>
				</div>
				<Line
					style={{ marginBottom: "200px" }}
					options={options1}
					data={data1}
				/>
				<Line options={options2} data={data2} />
			</div>
		</>
	);
}

export { Home };
