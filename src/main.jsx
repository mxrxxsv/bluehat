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
    path: "/bluehat/singnup", 
    element: <Singup />
  },
  {
    path: "/bluehat/workersignup",
    element: <WorkerSignup />
  },
  {
    path: "/bluehat/clientsignup",
    element: <ClientSignup />
  },
  {
    path: "/bluehat/workerquestion",
    element: <WorkerQuestion />
  },
  {
    path: "/bluehat/findwork",
    element: <FindWork />
  },
  {
    path: "/bluehat/findworker",
    element: <FindWorker />
  },
  {
    path: "/bluehat/workerpage",
    element: <WorkerPage />
  },
  {
    path: "/bluehat/chatpage",
    element: <ChatPage />
  },
  {
    path: "/bluehat/workerprofile",
    element: <WorkerProfile />
  },
  {
    path: "/bluehat/adspage",
    element: <AdsPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
