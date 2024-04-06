import {useNavigate} from "react-router-dom";

export default function Map() {

    const navigation = useNavigate()

    if(!localStorage.getItem('token')) {
        navigation('/login')
    }

    return (
        <div>

        </div>
    );
}