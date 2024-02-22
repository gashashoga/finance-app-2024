import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard.jsx";
import Main, { mainLoader } from "./layouts/Main.jsx";
import { logoutAction } from "./actions/logout.js";
import Error from './pages/Error.jsx';
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path:"logout",
        action: logoutAction,
      }

    ]
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;