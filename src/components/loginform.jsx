import {useEffect, useRef, useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from "react-router-dom";

export default function LoginForm () {
    const navigate = useNavigate();
    const emailRef = useRef(null); // Создаем ссылку на поле электронной почты
    const passwordRef = useRef(null); // Создаем ссылку на поле пароля
    const [buttonColor, setButtonColor] = useState("#E8EBEB");
    const [textColor, setTextColor] = useState("#A0A1A5");
    const [isDisabled, setIsDisabled] = useState(false);

    function handleInputChange() {
        // Проверяем, заполнены ли оба поля
        if (emailRef.current.value && passwordRef.current.value) {
            setButtonColor("#008080"); // Если оба поля заполнены, меняем цвет кнопки
            setTextColor("white")

        } else {
            setButtonColor("#E8EBEB"); // Иначе возвращаем изначальный цвет кнопки
            setTextColor("#A0A1A5")
        }
    }
    async function login(event) {
        event.preventDefault();
        setIsDisabled(true)
        fetch( 'https://api.yakutianoracle.ru/api/v1/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value
            }),
        })
            .then(async response => {
                // Обработка ответа
                if (response.ok) {
                    const data = await response.json()
                    if(data.status == 'false') {
                        toast('Неверная почта или пароль', {
                            style: {background: 'red', color: 'white'}
                        })
                    } else if (data.status == 'true') {
                        toast('Вход с нового IP адреса, проверьте почту', {
                            style: {background: 'orange', color: 'white'}
                        })
                    } else if (data.token != null) {
                        localStorage.setItem('token',data.token)
                        navigate("/")
                    }
                } else {
                    // Обработка ошибок
                }
            })
        setIsDisabled(false)
    }

    return (
        <div className={"rounded-[32px] bg-white w-[600px] text-[#A0A1A5] flex flex-col p-8"}>
            <Toaster />
            <h2 className={"text-black text-[32px] mb-6"}>Вход на портал</h2>
            <form onSubmit={login}>
                <div className={"border border-[1px] flex rounded-[18px]"}>
                    <img className={"pl-4"} src={'user.svg'}/>
                    <input ref={emailRef} className={"py-4 w-full pl-4 outline-none rounded-[18px]"} type="email"
                           placeholder={"Почта"} required={true} onChange={handleInputChange}/>
                </div>
                <div className={"border mt-3 border-[1px] flex rounded-[18px]"}>
                    <img className={"pl-4"} src={'lock.svg'}/>
                    <input ref={passwordRef} className={"py-4 w-full pl-4 outline-none rounded-[18px]"} type="password"
                           placeholder={"Пароль"} required={true} onChange={handleInputChange}/>
                </div>
                <button disabled={isDisabled} style={{ backgroundColor: buttonColor, color: textColor }} className={"w-full mt-6 rounded-[14px] mb-6 py-4"}>Войти</button>
            </form>
            <a href="">Не могу вспомнить пароль</a>
        </div>
    );
}