import { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Login from "../components/Pages/login";
import { useSelector } from "react-redux";
import { LOGIN_ROUTE, QUEUE_START_ROUTE, VENDOR_SEARCH_ROUTE } from "../constants/routes";
import VendorHome from "../components/Pages/vendor-home";
import CusHome from "../components/Pages/cus-home";


// import ClientListView from "../pages/Client";
// import ProjectListView from "../pages/Project";
// import Redirect from "../pages/Redirect";
// import TaskListView from "../pages/Task";
// import Users from "../pages/Users";
// import TimeSheet from "../pages/TimeSheet";
// import ProjectDetailView from "../pages/Project/[id]";

//const NotFound = lazy(() => import("../pages/NotFound"));

export const APP_ROUTES = [
  // {
  //   path: "*",
  //   component: <NotFound />,
  // },
  {
    path: LOGIN_ROUTE,
    component: <Login />,
  },
  {
    path: VENDOR_SEARCH_ROUTE,
    component: <CusHome />
  },
  {
    path:  QUEUE_START_ROUTE,
    component: <VendorHome />
  }


//{
  //   path: '/project/:id/:name/:client',
  //   component : <ProjectDetailView />
  // }
];

const AppRoutes = () => {
  //const navigate = useNavigate();
  //const { response, errors, loading } = useSelector((state: AppState) => state.user);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {APP_ROUTES.map((route, index) => (
          <Route key={index} element={route.component} path={route.path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
