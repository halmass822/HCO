import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PageOutPage from './components/PageOutPage/PageOutPage';
import MainPage from './components/MainPage/MainPage';
import TopBar from './components/TopBar/TopBar';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <MainPage />
  },
  {
    path: "pageout",
    element: <PageOutPage />
  },
])

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path="pageout" element={<PageOutPage />} />
    </Route>
    
    // <Route path="/" element={<App />}>
    //   <Route path="home" element={<MainPage />}></Route>
    //   <Route path="pageout" element={<PageOutPage />}></Route>
    // </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router2} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
