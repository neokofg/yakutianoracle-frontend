import logo from '../assets/logo.png';
export default function Navbar () {

    const token = localStorage.getItem('token');

    function Login () {
        if(token) {
            return (
                <a href={'/profile'} className={"text-black"}>Профиль</a>
            );
        } else {
            return (
                <a href={'/login'} className={"text-black"}>Вход</a>
            );
        }
    }

    return (
        <div className={"flex justify-between items-center px-10 mt-4 mb-2"}>
            <a href={'/'}><img src={logo} className={"w-[250px]"} alt="Yakutian Oracle"/></a>
            <div className={"flex items-center gap-6 mr-6"}>
                <p>Почему мы</p>
                <p>О сервисе</p>
                <p>Функционал</p>
                <p>Цена</p>
                <a href={'/buy'} className={"rounded-[14px] bg-[#008080] py-3 px-7"}>Купить подписку</a>
                <Login />
            </div>
        </div>
    );
}