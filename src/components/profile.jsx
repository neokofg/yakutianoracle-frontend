import {useNavigate} from "react-router-dom";

export default function ProfilePage() {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('id')
        navigate('/')
    }

    return (
        <div className={"rounded-[32px] bg-white w-[600px] text-[#A0A1A5] flex flex-col p-8"}>
            <h2 className={"text-black text-[32px] mb-6"}>Профиль</h2>
            <div className={"border border-[1px] flex rounded-[18px]"}>
                <img className={"pl-4"} src={'user.svg'}/>
                <p className={"py-4 w-full pl-4 outline-none rounded-[18px]"}>{localStorage.getItem('name')}</p>
            </div>
            <div className={"border mt-3 border-[1px] flex rounded-[18px]"}>
                <img className={"pl-4"} src={'email.svg'}/>
                <p className={"py-4 w-full pl-4 outline-none rounded-[18px]"}>{localStorage.getItem('email')}</p>
            </div>
            <button onClick={logout} className={"w-full mt-6 rounded-[14px] mb-6 py-4 bg-[#E8EBEB] text-[red]"}>Выйти
            </button>
        </div>
    );
}