import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
    const [employes, setEmployes] = useState([]);

    const newEmploye = (employe) => {
        console.log(employe);
        setEmployes([...employes, employe]);
    };

    return (
        <div className="App">
            <Banner />
            <Form registeredEmploye={(employe) => newEmploye(employe)} />
            <Team name="Programação" />
            <Team name="Frontend" />
            <Team name="Data Science" />
        </div>
    );
}

export default App;
