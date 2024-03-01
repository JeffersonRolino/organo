import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import TextInput from "../TextInput";
import "./Form.css";

const Form = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    const onSave = (event) => {
        event.preventDefault();
        props.registeredEmploye({
            name,
            position,
            image,
            team,
        });
    };

    return (
        <section className="form-employees">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput
                    value={name}
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    onChangeValue={(value) => setName(value)}
                />
                <TextInput
                    value={position}
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    onChangeValue={(value) => setPosition(value)}
                />
                <TextInput
                    value={image}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    onChangeValue={(value) => setImage(value)}
                />
                <DropDown
                    value={team}
                    label="Times"
                    itens={props.teams}
                    onChangeValue={(value) => setTeam(value)}
                ></DropDown>
                <Button>Criar Card</Button>
            </form>
        </section>
    );
};

export default Form;
