import "../styles/components/Button.scss";

const Button = (props) => {

    const handleButtonClick = (event) => {
        event.preventDefault();
        props.handleClick();
    };


    return (
        <input
            className="new-pokemon__btn"
            type={props.inputType}
            value={props.inputValue}
            disabled={props.inputDisabled}
            onClick={handleButtonClick}
        />
    );
};

export default Button;


        
