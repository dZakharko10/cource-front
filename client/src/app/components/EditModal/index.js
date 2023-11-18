import React, {useState} from 'react';
import Modal from "react-modal";
import axios from "axios";

const EditModal = ({_car}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [car, setCar] = useState(_car)


    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal} className={"modal__button"}>Редагувати</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Модальне вікно"
            >
                <div className={'modal'}>
                    <div className={"modal__close"}>
                        <button className={'modal__close__button'} onClick={closeModal}>Закрити</button>
                    </div>
                    <div className={'modal__container'}>
                        <div className={'modal__container__element'}>
                            <label>
                                Номера машина
                                <input type="text" value={car.vehicle_number} onChange={(e) => setCar({...car, vehicle_number: e.target.value})}/>
                            </label>
                            <label>
                                Бренд
                                <input type="text" value={car.brand} onChange={(e) => setCar({...car, brand: e.target.value})}/>
                            </label>
                            <label>
                                Модель
                                <input type="text" value={car.model} onChange={(e) => setCar({...car, model: e.target.value})}/>
                            </label>
                            <label>
                                Рік
                                <input type="number" value={car.year} onChange={(e) => setCar({...car, year: Number(e.target.value)})}/>
                            </label>
                        </div>
                        <div className={'modal__container__element'}>
                            <label>
                                Вартість
                                <input type="number" value={car.cost} onChange={(e) => setCar({...car, cost: Number(e.target.value)})}/>
                            </label>
                            <label>
                                Стан
                                <input type="text" value={car.state} onChange={(e) => setCar({...car, state: e.target.value})}/>
                            </label>
                            <label>
                                Пробіг
                                <input type="number" value={car.mileage} onChange={(e) => setCar({...car, mileage: Number(e.target.value)})}/>
                            </label>
                            <label>
                                Картинка
                                <input type="text" value={car.mileage} onChange={(e) => setCar({...car, img: e.target.value})}/>
                            </label>
                            <label>
                                Обє'м двигуна
                                <input type="text" value={car.engine_capacity} onChange={(e) => setCar({...car, engine_capacity: e.target.value})}/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className={'modal__button'} onClick={() => {
                                axios.put(`http://localhost:3000/cars/${car.id}`, {vehicle_number: car.vehicle_number, brand: car.brand, model: car.model, year: car.year, cost: car.cost, state: car.state, mileage: car.mileage, engine_capacity: car.engine_capacity, img: car.img})
                                    .then(res => {
                                        alert("Автомобіль був успішно змінений");
                                        window.location.href = "/cars"
                                    })
                                    .catch(error => {
                                        alert("Помилка при редагуванні")
                                    })
                        }}>Редагувати</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default EditModal;