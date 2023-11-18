import './App.css';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./provider/routes";

function App() {
  return (
    <div className={"app"}>
      <Routes>
        {publicRoutes.map((x) => (
            <Route
                key={x.path}
                path={x.path}
                element={<x.Component/>}
            />
        ))}
      </Routes>
    </div>
  );
}

export default App;
