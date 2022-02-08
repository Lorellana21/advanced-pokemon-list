import "../styles/components/Form.scss";
import Button from "./Button";
import Input from "./Input";

const Form = () => {

    return (

        <>
            <form className="new-pokemon__form">
                <h2 className="new-pokemon__title">Add a new pokemon</h2>
                <Input></Input>
                <Input></Input>
                <Input></Input>
                <Input></Input>
                <Button></Button>
                {/* <input
                    className="new-pokemon__input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                />
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