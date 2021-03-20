import React, { Component } from "react";
import Input from "./Input";
import { TextInputType } from "./Input";

class TextArea extends Component<TextInputType, any> {
    render() {
        const { register, name, placeholder, className } = this.props;
        return (
            <Input>
                <textarea ref={register} placeholder={placeholder} className={`input ${className || ""}`} name={name}></textarea>
            </Input>
        );
    }
}

export default TextArea;
