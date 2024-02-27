import Button from "../Button";
import DropDown from "../DropDown";
import TextInput from "../TextInput";
import './Form.css';

const Form = () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const onSave = (event) => {
        event.preventDefault();        
        console.log('Form was submited');
    }

    return (
        <section className="form-employees">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput required={true} label="Nome" placeholder="Digite seu nome"/>
                <TextInput required={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextInput label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropDown label="Times" itens={times}></DropDown>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;