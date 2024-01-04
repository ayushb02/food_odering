import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider ,createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Errorelement from './components/Errorelement';
import Body from './components/Body';
import Menu_Card from './components/Menu_Card';
import Login from './components/Login';
import Signup from './components/Signup';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorelement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path : "/restaurants/:resID",
        element: <Menu_Card />,
      },
      {
        path : "/login",
        element : <Login />,
      },
      {
        path : "/signup",
        element : <Signup />,
      }
    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
