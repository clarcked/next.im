import React from "react";
import Modal from "../comps/modal";

const BaseLink = (Enhanced, options: any) =>
    class Link extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
            this.state = {
                ...options,
                is_open: false,
            };
        }
        open() {
            this.setState({ is_open: true });
        }
        close() {
            this.setState({ is_open: false });
        }
        render() {
            const { is_open, Manager } = this.state;
            return (
                <React.Fragment>
                    <Enhanced {...this.props} {...this.state} open={this.open.bind(this)} close={this.close.bind(this)} />
                    {is_open && (
                        <Modal is_open={is_open} close={this.close.bind(this)}>
                            {Manager && <Manager {...this.props} {...this.state} />}
                        </Modal>
                    )}
                </React.Fragment>
            );
        }
    };

export default BaseLink;
