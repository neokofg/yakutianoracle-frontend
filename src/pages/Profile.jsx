import Navbar from "../components/navbar";
import ProfilePage from "../components/profile";

export default function Profile() {
    return (
        <div>
            <Navbar />
            <div className={'flex items-center justify-center h-[600px]'}>
                <ProfilePage />
            </div>
        </div>
    );
}