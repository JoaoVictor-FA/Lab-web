import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { GlobalProvider } from './context/GlobalContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Edit from './pages/Edit';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit",
    element: <Edit/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router}/>
    </GlobalProvider>
  </React.StrictMode>
);

reportWebVitals();
