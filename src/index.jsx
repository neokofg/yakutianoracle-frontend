import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Index from "./pages/Index.jsx";
import './App.css';

function disableCtrlScrollZoom(event) {
    // Проверяем, нажата ли клавиша Ctrl (event.ctrlKey) и является ли событие прокруткой колесика мыши (event.type === 'wheel')
    if (event.ctrlKey && event.type === 'wheel') {
        // Предотвращаем действие по умолчанию (масштабирование)
        event.preventDefault();
    }
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
]);

// Добавляем обработчики событий на весь документ
// document.addEventListener('wheel', disableCtrlScrollZoom, { passive: false });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
