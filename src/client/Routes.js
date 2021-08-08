import Home from "./components/Home";
import Activity from "./components/Activity";
import Detail from "./components/Detail";

const Routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/activity",
    component: Activity,
  },
  {
    exact: true,
    path: "/detail",
    component: Detail,
  },
];

export default Routes;
