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
                    inputName="evolution"
                    inputId="evolution"
                    inputPlaceholder="Evolution"
                    inputValue={props.evolution}
                    handleChange={props.handleEvolution}
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
                    handleChange={props.handleType2}
                />
                <Input
                    inputName="picture"
                    inputId="picture"
                    inputPlaceholder="Picture"
                    inputValue={props.picture}
                    handleChange={props.handlePicture}
                />
                <Button
                    inputType="submit"
                    inputValue="Add"

                    handleClick={props.handleForm}
                />


            </form>
        </>


    )
}
export default Form;