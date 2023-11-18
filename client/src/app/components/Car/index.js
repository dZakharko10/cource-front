import React from 'react';
import './css/index.css';
import carLogo from '../../img/pngegg.png'

const CarBlock = ({car, index}) => {
    return (
        <div className={'car'} key={`Car-${index+1}`} onClick={() => window.location.href = `/cars/${car.id}`}>
            <img className={'car__img'} src={car.img? car.img : carLogo} alt="CarLogo"/>
            <div className={'car__container'}>
                <div className={'car__container__el'}>{`Номер автомобіля: ${car.vehicle_number}`}</div>
                <div className={'car__container__el'}>{`Марка та модель: ${car.brand} ${car.model}`}</div>
                <div className={'car__container__el'}>{`Рік випуску: ${car.year}`}</div>
            </div>
        </div>
    );
};

export default CarBlock;