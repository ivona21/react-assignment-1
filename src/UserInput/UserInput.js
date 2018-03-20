import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
    return (
        <div className="UserInputContainer">
            <input className="Input" type="text" onChange={props.change} value={props.username} />
        </div>
    )
}

export default UserInput;