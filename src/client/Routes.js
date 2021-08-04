import Home from "./components/Home";
import Activity from "./components/Activity";

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
];

export default Routes;
