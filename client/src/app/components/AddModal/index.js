import React, {useState} from 'react';
import "../index.css"
import axios from "axios";
import Modal from 'react-modal';

const AddModal = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const [vehicle_number, setVehicle_number] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(0);
    const [cost, setCost] = useState(0);
    const [state, setstate] = useState("");
    const [img, setImg] = useState("");
    const [mileage, setMileage] = useState(0);
    const [engine_capacity, setEngine_capacity] = useState("");

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal} className={"modal__button"}>Додати Машину</button>
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
                                Номера машини
                                <input type="text" onChange={(e) => setVehicle_number(e.target.value)}/>
                            </label>
                            <label>
                                Бренд
                                <input type="text" onChange={(e) => setBrand(e.target.value)}/>
                            </label>
                            <label>
                                Модель
                                <input type="text" onChange={(e) => setModel(e.target.value)}/>
                            </label>
                            <label>
                                Рік
                                <input type="number" onChange={(e) => setYear(Number(e.target.value))}/>
                            </label>
                        </div>
                        <div className={'modal__container__element'}>
                            <label>
                                Вартість
                                <input type="number" onChange={(e) => setCost(Number(e.target.value))}/>
                            </label>
                            <label>
                                Стан
                                <input type="text" onChange={(e) => setstate(e.target.value)}/>
                            </label>
                            <label>
                                Пробіг
                                <input type="number" onChange={(e) => setMileage(Number(e.target.value))}/>
                            </label>
                            <label>
                                Картинка
                                <input type="text" onChange={(e) => setImg(e.target.value)}/>
                            </label>
                            <label>
                                Об'єм двигуна
                                <input type="text" onChange={(e) => setEngine_capacity(e.target.value)}/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className={'modal__button'} onClick={() => {
                            if (vehicle_number === '' || brand === '' || model === '' || year === 0 || cost === 0 || state === ''|| mileage === 0 || engine_capacity === '') {
                                alert("Не всі поля заповнені")
                            }else {
                                axios.post("http://localhost:3000/cars", {vehicle_number, brand, model, year, cost, state, mileage, img, engine_capacity})
                                    .then(res => {
                                        alert("Автомобіль був успішно доданий");
                                        window.location.href = "/cars"
                                    })
                                    .catch(error => {
                                        alert("Помилка при створенні")
                                    })
                            }

                        }}>Додати</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AddModal;