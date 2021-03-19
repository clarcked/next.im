import React from "react";
import Modal from "../comps/modal";

const BaseLink = (Enhanced, options: any) =>
    class Link extends React.Component<any, any> {
        constructor(props: any) {
            super({ ...props, ...options });
            this.state = {
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
            const { is_open } = this.state;
            return (
                <React.Fragment>
                    <Enhanced {...this.props} />
                    {is_open && (
                        <Modal is_open={is_open}>
                            <div className="pad">The Manager goes there</div>
                        </Modal>
                    )}
                </React.Fragment>
            );
        }
    };

export default BaseLink;
