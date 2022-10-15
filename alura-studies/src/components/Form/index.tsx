import React from "react";
import Button from "../Button";
import TextField from "../Field/Text";
import TimeField from "../Field/Time";

class Form extends React.Component {
    render(){
        return (
            <form>
                <div>
                    <TextField />
                </div>
                <div>
                    <TimeField />
                </div>
                <Button />
            </form>
        )
    }
}

export default Form;