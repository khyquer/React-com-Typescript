import React from "react";

class Text extends React.Component {
    render(){
        return (
            <div className="inputContainer">
                <label htmlFor="task">Adicione um estudo</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
        )
    }
}

export default Text;