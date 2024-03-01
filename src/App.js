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
<<<<<<< HEAD
            <Team name="Programação" />
            <Team name="Frontend" />
            <Team name="Data Science" />
=======
>>>>>>> 12174b8b4bab3b3d19ad75e6c9b042513d9bbc03
        </div>
    );
}

export default App;
