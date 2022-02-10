import "../styles/components/Input.scss";

const Input = (props) => {

    return (

        <input
            className="new-pokemon__input"
            type="text"
            name={props.inputName}
            id={props.inputId}
            placeholder={props.inputPlaceholder}
            value={props.inputValue}
        />
    )
}
export default Input;