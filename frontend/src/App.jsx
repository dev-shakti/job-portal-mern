import Companies from "./components/admin/Companies";
import CompanySetup from "./components/admin/CompanySetup";
import CreateCompany from "./components/admin/CreateCompany";
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
        element: <Jobs/>,
      },
      {
        path: '/browse',
        element: <Browse/>,
      },
      {
        path: '/profile',
        element: <Profile/>,
      },
      {
        path: '/jobdetails/:id',
        element: <JobDetails/>,
      },
      {
        path: '/admin/companies',
        element: <Companies/>,
      },
      {
        path: '/admin/company/create',
        element: <CreateCompany/>,
      },
      {
        path: '/admin/company/:id',
        element: <CompanySetup/>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
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
