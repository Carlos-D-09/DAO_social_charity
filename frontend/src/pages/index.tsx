import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Register } from "./register";
import { Create } from "./create";

const routes = [
	{ path: "/", Page: Home },
	{ path: "/register", Page: Register },
	{ path: "create", Page: Create },
];

function Routing() {
	const getRoutes = () =>
		routes.map(({ path, Page }) => (
			<Route key={path} path={path} element={<Page />} />
		));

	return <Routes>{getRoutes()}</Routes>;
}
export { Routing };
