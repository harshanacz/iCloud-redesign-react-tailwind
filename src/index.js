import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import UserGuidePage from './pages/UserGuidePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { Import } from 'lucide-react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, {
    path: "guide",
    element: <UserGuidePage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
