import AdminJobs from "./components/admin/AdminJobs";
import Applicants from "./components/admin/Applicants";
import Companies from "./components/admin/Companies";
import CompanySetup from "./components/admin/CompanySetup";
import CreateCompany from "./components/admin/CreateCompany";
import PostJobs from "./components/admin/PostJobs";
import JobDetails from "./components/JobDetails";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import Browse from "./pages/Browse";
import HomePage from "./pages/HomePage";
import Jobs from "./pages/Jobs";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PublicRoute } from "./routes/PublicRoute";
import {ProtectedRoute} from "./routes/ProtectedRoute";
import { PrivateRoute } from "./routes/privateRoute";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/jobs',
        element: <PrivateRoute><Jobs/></PrivateRoute>,
      },
      {
        path: '/browse',
        element:<PrivateRoute><Browse/></PrivateRoute> ,
      },
      {
        path: '/profile',
        element:<PrivateRoute><Profile/></PrivateRoute> ,
      },
      {
        path: '/jobdetails/:id',
        element: <PrivateRoute><JobDetails/></PrivateRoute>,
      },
      {
        path: '/admin/companies',
        element: <ProtectedRoute><Companies/></ProtectedRoute>,
      },
      {
        path: '/admin/company/create',
        element: <ProtectedRoute><CreateCompany/></ProtectedRoute>,
      },
      {
        path: '/admin/company/:id',
        element: <ProtectedRoute><CompanySetup/></ProtectedRoute>,
      },
      {
        path: '/admin/jobs',
        element: <ProtectedRoute><AdminJobs/></ProtectedRoute>,
      },
      {
        path: '/admin/job/create',
        element: <ProtectedRoute><PostJobs/></ProtectedRoute>,
      },
      {
        path: '/admin/job/:id/applicants',
        element: <ProtectedRoute><Applicants/></ProtectedRoute>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element:<PublicRoute><LoginPage /></PublicRoute> ,
      },
      {
        path: 'register',
        element:<PublicRoute><RegisterPage /></PublicRoute> ,
      },
    ],
  },
]);

function App() {
  
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
