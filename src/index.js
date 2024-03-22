import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './components/homepage';
import ARPage from './components/camera';
import App from './App';



const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: < HomePage />,
      },
      {
        path: "camera",
        element: <ARPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

