import {CAR, CARS, HOME} from "../utils/consts";
import HomePage from "../page/HomePage";
import CarsPage from "../page/CarsPage";
import CarPage from "../page/CarPage";

export const publicRoutes = [
    {
        path: HOME,
        Component: HomePage
    },
    {
        path: CARS,
        Component: CarsPage
    },
    {
        path: CAR,
        Component: CarPage
    },
]