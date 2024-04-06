import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Index from "./pages/Index.jsx";
import './App.css';
import BuySubscription from "./pages/BuySubscription";
import Profile from "./pages/Profile";
import toast from "react-hot-toast";

function disableCtrlScrollZoom(event) {
    // Проверяем, нажата ли клавиша Ctrl (event.ctrlKey) и является ли событие прокруткой колесика мыши (event.type === 'wheel')
    if (event.ctrlKey && event.type === 'wheel') {
        // Предотвращаем действие по умолчанию (масштабирование)
        event.preventDefault();
    }
}
const token = localStorage.getItem('token');
const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
const id = localStorage.getItem('id');
function getUser() {
    if(token && !name || !email || !id) {
        fetch('http://localhost:8000/api/v1/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(async response => {
                // Обработка ответа
                if (response.ok) {
                    const data = await response.json()
                    console.log(data);
                    localStorage.setItem('name',data.name);
                    localStorage.setItem('email',data.email);
                    localStorage.setItem('id',data.id);
                } else {
                    // Обработка ошибок
                }
            })
    }
}

addEventListener('load', getUser)


const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: 'buy',
        element: <BuySubscription />
    },
    {
        path: 'profile',
        element: <Profile />
    }
]);

// Добавляем обработчики событий на весь документ
// document.addEventListener('wheel', disableCtrlScrollZoom, { passive: false });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
