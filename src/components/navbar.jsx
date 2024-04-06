import logo from '../assets/logo.png';
export default function Navbar () {

    const token = localStorage.getItem('token');

    function Login () {
        if(token) {
            return (
                <a href={'/profile'} className={"text-black rounded-[18px] bg-white py-3 px-3"}>
                    <img src="/profile.svg" alt=""/>
                </a>
            );
        } else {
            return (
                <a href={'/login'} className={"text-black"}>Вход</a>
            );
        }
    }

    function Map() {
        if(token) {
            return (
                <div>
                    <a href={'/map'} className={"rounded-[14px] bg-[#008080] py-3 px-7 mr-4"}>Открыть карту</a>
                    <a href={'/statistics'} className={"rounded-[14px] bg-[#008080] py-3 px-7"}>Открыть статистику</a>
                </div>
            );
        } else {
            return (
                <a href={'/buy'} className={"rounded-[14px] bg-[#008080] py-3 px-7"}>Купить подписку</a>
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
                <div className={"flex justify-center items-center gap-4"}>
                    <Map />
                    <Login />
                </div>
            </div>
        </div>
    );
}