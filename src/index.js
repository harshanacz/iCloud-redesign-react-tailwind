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
import SignInPage from './pages/SignInPage';
// import { Import } from 'lucide-react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, {
    path: "guide",
    element: <UserGuidePage/>,
  },
  {
    path: "login",
    element: <SignInPage/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
