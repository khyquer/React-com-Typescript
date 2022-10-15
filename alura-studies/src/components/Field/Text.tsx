import React from "react";

class Text extends React.Component {
    render(){
        return (
            <>
                <label htmlFor="task">Adicione um estudo</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="O que você quer estudar?"
                    required
                />
            </>
        )
    }
}

export default Text;