import "../styles/components/Form.scss";
import Button from "./Button";
import Input from "./Input";

const Form = (props) => {

    return (

        <>
            <form className="new-pokemon__form">
                <h2 className="new-pokemon__title">Add a new pokemon</h2>
                <Input
                    inputName="name"
                    inputId="name"
                    inputPlaceholder="Name"
                    inputValue={props.name}
                    handleChange={props.handleName}
                />
                <Input
                    inputName="types"
                    inputId="types"
                    inputPlaceholder="Type"
                    inputValue={props.type1}
                    handleChange={props.handleType1}
                />
                <Input
                    inputName="types"
                    inputId="types"
                    inputPlaceholder="Type"
                    inputValue={props.type2}
                    handleChange={props.handleType2}></Input>
                <Input></Input>
                <Button
                    inputType="submit"
                    inputValue="Add"
                    inputDisabled={props.isValidForm() === false}
                    handleClick={props.handleForm}
                />
                {/* <input

                <input
                    className="new-pokemon__input"
                    type="text"
                    name="types"
                    id="types"
                    placeholder="Types"
                />
                <input
                    className="new-pokemon__input"
                    type="text"
                    name="evolution"
                    id="evolution"
                    placeholder="Evolution"
                />
                <input
                    className="new-pokemon__input"
                    type="picture"
                    name="picture"
                    id="picture"
                    placeholder="Picture"
                /> */}

            </form>
        </>


    )
}
export default Form;