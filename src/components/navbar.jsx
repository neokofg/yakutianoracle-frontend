import logo from '../assets/logo.png';
export default function Navbar () {
    return (
        <div className={"flex justify-between items-center px-10 mt-4"}>
            <img src={logo} className={"w-[250px]"} alt="Yakutian Oracle"/>
            <div className={"flex items-center gap-6"}>
                <p>Label</p>
                <p>Label</p>
                <p>Label</p>
                <a href={'/login'} className={"rounded-[14px] bg-[#008080] py-3 px-7"}>Войти</a>
            </div>
        </div>
    );
}