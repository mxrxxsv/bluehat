import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './Singup.jsx';
import WorkerSignup from './WorkerSignup.jsx';
import ClientSignup from './ClientSignup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/singnup",
    element: <Signup />
  },
  {
    path: "/workersignup",
    element: <WorkerSignup />
  },
  {
    path: "/clientsignup",
    element: <ClientSignup />

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
