import React from "react";

class Time extends React.Component {
    render(){
        return (
            <div className="inputContainer">
                <label htmlFor="time">Adicione um estudo</label>
                <input
                    type="time"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
        )
    }
}

export default Time;