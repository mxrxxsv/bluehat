import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Singup from './Singup.jsx';
import WorkerSignup from './WorkerSignup.jsx';
import ClientSignup from './ClientSignup.jsx';
import WorkerQuestion from './WorkerQuestion.jsx';
import FindWork from './FindWork.jsx';
import FindWorker from './FindWorker.jsx';
import WorkerPage from './WorkerPage.jsx';
import ChatPage from './ChatPage.jsx';
import WorkerProfile from './WorkerProfile.jsx';
import AdsPage from './Adspage.jsx';

const router = createBrowserRouter([
  {
    path: "/bluehat",
    element: <App />,
  },
  {
    path: "/singnup",
    element: <Singup />
  },
  {
    path: "/workersignup",
    element: <WorkerSignup />
  },
  {
    path: "/clientsignup",
    element: <ClientSignup />
  },
  {
    path: "/workerquestion",
    element: <WorkerQuestion />
  },
  {
    path: "/findwork",
    element: <FindWork />
  },
  {
    path: "/findworker",
    element: <FindWorker />
  },
  {
    path: "/workerpage",
    element: <WorkerPage />
  },
  {
    path: "/chatpage",
    element: <ChatPage />
  },
  {
    path: "/workerprofile",
    element: <WorkerProfile />
  },
  {
    path: "/adspage",
    element: <AdsPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
