import React from "react";

class Time extends React.Component {
    render(){
        return (
            <>
                <label htmlFor="time">Adicione um estudo</label>
                <input
                    type="time"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </>
        )
    }
}

export default Time;