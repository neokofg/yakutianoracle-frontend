import {useNavigate} from "react-router-dom";
import Select from "react-select";
import {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts';
import Navbar from "../components/navbar";

export default function Statistics() {
    const navigation = useNavigate()
    const [cities,setCities] = useState()
    const [mainRating, setMainRating] = useState(0)
    const [series, setSeries] = useState([
        {
            name: 'Средняя температура',
            data: []
        }
    ]);
    const [transports, setTransports] = useState({
        rating: 0,
        airport_nearby: false,
        bus_stations: 0,
        road_nearby: false
    });
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const [options, setOptions] = useState({
        chart: {
            type: 'line',
            height: 350
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return `${value} °C`; // Форматируем всплывающую подсказку для отображения температуры
                }
            }
        },
        title: {
            text: 'Среднемесячная температура',
            align: 'left'
        },
        xaxis: {
            categories: [] // Пока что ось X пустая, заполним её месяцами
        }
    });
    const [donutSeries, setDonutSeries] = useState([]);
    const [donutOptions, setDonutOptions] = useState({
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    })
    if(!localStorage.getItem('token')) {
        navigation('/login')
    }

    useEffect(() => {
        fetch( 'https://api.yakutianoracle.ru/api/v1/user/geo/cities', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
            .then(async response => {
                const data = await response.json()
                const result = data.features.map(feature => {
                    return { value: feature.properties.id, label: feature.properties.name };
                });
                setCities(result)
            })
    }, []);

    function getCity(val) {
        fetch( 'https://api.yakutianoracle.ru/api/v1/user/geo/statistics/' + val["value"], {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
            .then(async response => {
                const data = await response.json()
                const months = data.year_rounds.map(item => monthNames[item.month - 1]);
                const temperatures = data.year_rounds.map(item => parseInt(item.average_temperature, 10));
                setSeries([
                    { name: 'Средняя температура', data: temperatures }
                ]);
                setOptions(prevOptions => ({
                    ...prevOptions,
                    xaxis: { ...prevOptions.xaxis, categories: months }
                }));
                const categoryCounts = {};
                const categoryTitles = [];
                data.geo.forEach(item => {
                    const { title } = item.category;
                    if (!categoryCounts[title]) {
                        categoryCounts[title] = 1;
                        categoryTitles.push(title); // Добавляем уникальное название в массив
                    } else {
                        categoryCounts[title]++;
                    }
                });
                setDonutOptions(prevOptions => ({
                    ...prevOptions,
                    labels: categoryTitles
                }));
                setDonutSeries(Object.values(categoryCounts));
                setTransports({
                    rating: data.transports.rating,
                    airport_nearby: data.transports.airport_nearby,
                    bus_stations: data.transports.bus_stations,
                    road_nearby: data.transports.road_nearby
                })
                setMainRating(data.rating)
            })
    }

    return (
        <div className={"text-black"}>
            <Navbar/>
            {/*<ReactApexChart options={treeMapOptions} series={treeMapSeries} type="treemap" height={350} />*/}
            <Select className={"w-1/2 mx-auto my-10"} onChange={getCity} options={cities} />
            <ReactApexChart options={options} series={series} type="line" height={350} />
            <div className={"flex"}>
                <ReactApexChart options={donutOptions} series={donutSeries} type="donut" width={1000} height={350} />
                <div className={'px-10'}>
                    <h3 className={"text-[32px]"}>Рейтинг транспортной доступности:</h3>
                    <p>Рейтинг доступности: {transports.rating}</p>
                    <p>Есть ли рядом аэропорт: {transports.airport_nearby ? 'Да' : 'Нет'}</p>
                    <p>Количество автобусных остановок: {transports.bus_stations}</p>
                    <p>Если рядом главная дорога: {transports.road_nearby  ? 'Да' : 'Нет'}</p>
                    <h1 className={'mt-10 text-[64px]'}>Потенциал: {mainRating}</h1>
                </div>
            </div>
        </div>
    );
}