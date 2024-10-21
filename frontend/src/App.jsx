import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import Jobs from "./pages/Jobs";
import LoginPage from "./pages/LoginPage";
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
