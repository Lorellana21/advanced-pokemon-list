import "../styles/components/Input.scss";

const Input = (props) => {

    const handleInputChange = (ev) => {
        props.handleChange(ev.target.value);

    }

    return (

        <input
            className="new-pokemon__input"
            type="text"
            name={props.inputName}
            id={props.inputId}
            placeholder={props.inputPlaceholder}
            value={props.inputValue}
            onChange={handleInputChange}
        />
    )
}
export default Input;