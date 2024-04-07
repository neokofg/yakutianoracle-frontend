import {useNavigate} from "react-router-dom";
import Navbar from "../components/navbar";

export default function Map() {

    const navigation = useNavigate()

    if(!localStorage.getItem('token')) {
        navigation('/login')
    }

    return (
        <div>
            <Navbar />
            <iframe src={"https://map.yakutianoracle.ru/?token=" + localStorage.getItem('token')} className={"w-full h-screen"} frameborder="0"></iframe>
        </div>
    );
}