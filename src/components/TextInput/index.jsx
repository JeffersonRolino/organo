import './TextInput.css';

const TextInput = (props) => {

    let inputValue = 'Teste';

    const onTyped = (event) => {
        inputValue = event.target.value;
        console.log(event.target.value);
    }

    return (
        <div className="text-input">
            <label>{props.label}</label>
            <input value={inputValue} onChange={onTyped} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextInput;