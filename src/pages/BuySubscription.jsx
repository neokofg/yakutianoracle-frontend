import Navbar from "../components/navbar";
import {useRef, useState} from "react";
import toast, {Toaster} from "react-hot-toast";

export default function BuySubscription() {
    const language = "ru-RU"
    const emailRef = useRef(null); // Создаем ссылку на поле электронной почты
    const [buttonColor, setButtonColor] = useState("#E8EBEB");
    const [textColor, setTextColor] = useState("#A0A1A5");
    const [isDisabled, setIsDisabled] = useState(false);

    function handleInputChange() {
        const email = emailRef.current.value; // Получаем значение электронной почты из ссылки

        // Проверяем, заполнены ли оба поля
        if (email) {
            setButtonColor("#008080"); // Если оба поля заполнены, меняем цвет кнопки
            setTextColor("white")

        } else {
            setButtonColor("#E8EBEB"); // Иначе возвращаем изначальный цвет кнопки
            setTextColor("#A0A1A5")
        }
    }
    function pay(event) {
        event.preventDefault()
        var widget = new cp.CloudPayments({
            language: language
        })
        widget.pay('auth', // или 'charge'
            { //options
                publicId: 'pk_ca57915d30d7bfa1ca41583e5c5ab', //id из личного кабинета
                description: 'Покупка подписки Yakutian Oracle', //назначение
                amount: 10000, //сумма
                currency: 'RUB', //валюта
                accountId: emailRef.current.value, //идентификатор плательщика (необязательно)
                skin: "modern", //дизайн виджета (необязательно)
                autoClose: 3
            }, {
                onSuccess: function(options) { // success
                    toast('Данные для входа были отправлены на почту', {
                        style: {background: 'green', color: 'white'}
                    })
                },
                onFail: function(reason, options) { // fail
                    toast('Произошла ошибка при оплате', {
                        style: {background: 'red', color: 'white'}
                    })
                },
                onComplete: function(paymentResult, options) {

                }
            }
        )
    }
    return (
        <div>
            <Navbar/>
            <Toaster />
            <div className={"flex justify-center items-center h-[600px]"}>
                <div className={"rounded-[32px] bg-white w-[600px] text-[#A0A1A5] flex flex-col p-8"}>
                    <form className={"flex flex-col"} onSubmit={pay}>
                        <div className={"border border-[1px] flex rounded-[18px]"}>
                            <img className={"pl-4"} src={'email.svg'}/>
                            <input ref={emailRef} className={"py-4 w-full pl-4 outline-none rounded-[18px]"}
                                   type="email"
                                   placeholder={"Почта"} required={true} onChange={handleInputChange}/>
                        </div>
                        <button disabled={isDisabled} style={{backgroundColor: buttonColor, color: textColor}}
                                className={"w-full mt-6 rounded-[14px] mb-6 py-4"}>Купить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}