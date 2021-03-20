import React, { Component } from "react";
import { MdClose } from "react-icons/md";

class Modal extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { is_open, children, close } = this.props;
        let state = is_open ? "open" : "hide";
        return (
            <div className={`modal ${state}`}>
                <div className="modal-container">
                    <div className="modal-actions">
                        <div className="modal-action">
                            <button type="button" className="btn btn-icon outline" onClick={close}>
                                <MdClose />
                            </button>
                        </div>
                    </div>
                    <section className="no-scroll">{children}</section>
                </div>
            </div>
        );
    }
}

export default Modal;
