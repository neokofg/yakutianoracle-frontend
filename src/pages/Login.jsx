import Navbar from "../components/navbar";
import LoginForm from "../components/loginform";
import {useNavigate} from "react-router-dom";

export default function Login () {
    const navigate = useNavigate();

    // function checkLogin() {
    //     if(localStorage.getItem('token') != null) {
    //         navigate('/')
    //     }
    // }
    //
    // checkLogin()

    return (
        <div>
            <Navbar />
            <div className={"flex items-center justify-center h-[600px]"}>
                <LoginForm />
            </div>
        </div>
    );
}