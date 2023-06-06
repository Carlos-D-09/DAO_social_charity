import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Test } from './test';

const routes = [{ path: '/', Page: Home }, {path: '/test', Page: Test}];

function Routing() {
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

  return <Routes>{getRoutes()}</Routes>;
} 
export { Routing };
