import React, { Component } from "react";
import Input from "./Input";
import { TextInputType } from "./Input";

class TextInput extends Component<TextInputType, any> {
    render() {
        const { register, name, placeholder, type, className } = this.props;
        return (
            <Input {...this.props}>
                <input ref={register} placeholder={placeholder} className={`input ${className || ""}`} type={type || "text"} name={name}></input>
            </Input>
        );
    }
}

export default TextInput;
