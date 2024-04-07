import bg from '../assets/bg.png';
import img from '../assets/img.png';
import img2 from '../assets/img_4.png';
import img3 from '../assets/img_2.png';
import img4 from '../assets/img_3.png';
import img5 from '../assets/img_5.png';
import img6 from '../assets/img_6.png';
import img7 from '../assets/img_7.png';

export default function Welcome() {
    return (
        <div className={"mx-auto px-8"}>
            <img draggable={false} src={bg} alt=""/>
            <img draggable={false} src={img} className={"mt-40 w-2/3 mx-auto"} alt=""/>
            <div className={"flex mt-40 gap-8"}>
                <div className={"w-full"}>
                    <div className={"rounded-[24px] bg-white h-[430px]"}>

                    </div>
                    <p className={"mt-5"}>РАЙОНЫ ЯКУТИИ - [22.03.2024]</p>
                </div>
                <div className={"w-full"}>
                    <div className={"rounded-[24px] bg-white h-[430px]"}>

                    </div>
                    <p className={"mt-5"}>ДОСТОПРИМЕЧАТЕЛЬНОСТИ - [22.03.2024]</p>
                </div>
                <div className={"w-full"}>
                    <div className={"rounded-[24px] bg-white h-[430px]"}>

                    </div>
                    <p className={"mt-5"}>ПОТЕНЦИАЛ - [22.03.2024]</p>
                </div>
                <div className={"w-full"}>
                    <div className={"rounded-[24px] bg-white h-[430px]"}>

                    </div>
                    <p className={"mt-5"}>ТРАНСПОРТНЫЕ - [22.03.2024]</p>
                </div>
            </div>
            <img draggable={false} src={img2} className={"mt-40 mx-auto"} alt=""/>
            <div className={"container mx-auto"}>
                <img src={img3} className={"mt-40 mx-auto w-[300px]"} alt=""/>
                <div className={"flex justify-between gap-4 mt-40"}>
                    <div className={"bg-white rounded-[32px] w-1/2 px-6 py-6"}>
                        <div className={"flex items-baseline"}>
                            <h3 className={"text-black text-[64px]"}>ПРО</h3>
                            <p className={"text-[#A0A1A5] text-[24px]"}>мес / 10 000 ₽</p>
                        </div>
                        <p className={"text-[24px]"}>Полный доступ к сервису</p>
                        <a href="/buy">
                            <button className={"bg-[#008080] w-full rounded-[16px] mt-4 py-3"}>Подключить</button>
                        </a>
                    </div>
                    <div className={"bg-white rounded-[32px] w-1/2 px-6 py-6"}>
                        <div className={"flex items-baseline"}>
                            <h3 className={"text-black text-[64px]"}>МАКС</h3>
                            <p className={"text-[#A0A1A5] text-[24px]"}>единоразово</p>
                        </div>
                        <p className={"text-[24px]"}>Полный доступ к сервису</p>
                        <a href="/buy">
                            <button className={"bg-[#008080] w-full rounded-[16px] mt-4 py-3"}>Подключить</button>
                        </a>
                    </div>
                </div>
            </div>
            <img draggable={false} src={img4} className={"mt-40 mx-auto w-[500px]"} alt=""/>
            <div className={"mt-40"}>
                <img src={img5} alt=""/>
            </div>
            <div className={"mt-40 mb-40"}>
                <img src={img6} alt=""/>
            </div>
            <img src={img7} className={'w-screen'} alt=""/>
        </div>
    );
}