import { Enlace } from "Enlace";
import { Link } from "react-router-dom";
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
function Home() {
	return (
		<>
			<Enlace title="Water Statistics" />
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
