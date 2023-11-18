import React, {useEffect, useState} from 'react';
import './css/index.css';
import carLogo from "../../img/pngegg.png";
import {useParams} from "react-router-dom";
import axios from "axios";
import EditModal from "../../components/EditModal";

const CarPage = () => {
    let {id} = useParams();
    const [car, setCar] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/cars/${id}`)
            .then(res => {
                setCar(res.data)
            })
            .catch(error => {
                console.log(error.log)
            })
    }, [])
    return (
        <div className={'car-page'} key={`Car-${car.id}`}>
            <img className={'car-page__img'} src={car.img?car.img : carLogo} alt="CarLogo"/>
            <div className={'car-page__container'}>
                <div className={'car-page__container__el'}>{`Номер автомобіля: ${car.vehicle_number}`}</div>
                <div className={'car-page__container__el'}>{`Марка та модель: ${car.brand} ${car.model}`}</div>
                <div className={'car-page__container__el'}>{`Рік випуску: ${car.year}`}</div>
                <div className={'car-page__container__el'}>{`Ціна: ${car.cost}`}</div>
                <div className={'car-page__container__el'}>{`Стан: ${car.state}`}</div>
                <div className={'car-page__container__el'}>{`Пробіг: ${car.mileage}`}</div>
                <div className={'car-page__container__el'}>{`Об'єм двигуна: ${car.engine_capacity}`}</div>
            </div>
            <div className={'car-page__buttons'}>
                <button onClick={() => {
                    axios.delete(`http://localhost:3000/cars/${car.id}`)
                        .then(res => {
                            alert("Видалення пройшло успішно");
                            window.location.href = "/cars"
                        })
                        .catch(error => {
                            alert("Помилка при видалені авто");
                        })
                }}>Видалити</button>
                <EditModal _car={car}/>
            </div>
        </div>
    );
};

export default CarPage;