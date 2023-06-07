import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Register } from "./register";

const routes = [
	{ path: "/", Page: Home },
	{ path: "/register", Page: Register },
];

function Routing() {
	const getRoutes = () =>
		routes.map(({ path, Page }) => (
			<Route key={path} path={path} element={<Page />} />
		));

	return <Routes>{getRoutes()}</Routes>;
}
export { Routing };
