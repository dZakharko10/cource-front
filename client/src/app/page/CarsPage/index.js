import React, {useEffect, useState} from 'react';
import './css/index.css';
import CarBlock from "../../components/Car";
import axios from "axios";
import AddModal from "../../components/AddModal";

const CarsPage = () => {
    const [cars, setCars] = useState();
    const [year, setYear] = useState(0);
    const [mileage, setMileage] = useState(0);
    const [cost, setCost] = useState(0);
    const [brand, setBrand] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3000/cars')
            .then(res => {
                setCars(res.data)
            })
            .catch(error => {
                console.log(error.log)
            })
    }, [])

    const find = (car) => {
        if (year !== 0) if (year !== car.year) return false;
        if (mileage !== 0) if (mileage !== car.mileage) return false;
        if (mileage !== 0) if (cost !== car.cost) return false;
        if (brand) if (brand !== car.brand) return false;
        return true;
    }

    return (
        <div className={'cars-page'}>
            <div className={'cars-page__menu'}>
                <div className={'cars-page__menu__container'}>
                    <div className={'cars-page__menu__container__title'}>
                        Меню
                    </div>
                    <div className={'cars-page__menu__container__el'}>
                        <label>
                            Рік випуску
                            <input type="number" onChange={(e) => setYear(Number(e.target.value))}/>
                        </label>
                        <label>
                            Пробіг
                            <input type="number" onChange={(e) => setMileage(Number(e.target.value))}/>
                        </label>
                        <label>
                            Вартість
                            <input type="number" onChange={(e) => setCost(Number(e.target.value))}/>
                        </label>
                        <label>
                            Марка
                            <input type="text" onChange={(e) => setBrand(e.target.value)}/>
                        </label>
                    </div>
                </div>
            </div>
            <div className={'cars-page__container'}>
                <div className={'cars-page__container__l1'}>
                    <AddModal/>
                </div>
                <div className={'cars-page__container__l2'}>
                    {cars?.map((value, index) => (
                        find(value) ?
                            <CarBlock car={value} index={index}/>
                            :
                            <></>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarsPage;