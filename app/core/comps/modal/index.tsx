import React, { Component } from "react";
import { MdClose } from "react-icons/md";

class Modal extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { is_open, children } = this.props;
        let state = is_open ? "open" : "hide";
        return (
            <div className={`modal ${state}`}>
                <div className="modal-container">
                    <div className="modal-actions">
                        <div className="modal-action">
                            <button className="btn btn-icon outline">
                                <MdClose />
                            </button>
                        </div>
                    </div>
                    <section>{children}</section>
                </div>
            </div>
        );
    }
}

export default Modal;
