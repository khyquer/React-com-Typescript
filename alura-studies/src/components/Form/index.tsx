import React from "react";
import Button from "../Button";
import TextField from "../Field/Text";
import TimeField from "../Field/Time";
import './style.scss'

class Form extends React.Component {
    render(){
        return (
            <form className="newTask">
                <TextField />
                <TimeField />
                <Button />
            </form>
        )
    }
}

export default Form;