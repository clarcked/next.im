import React from "react";

const BaseManager = (Enhanced, options: any) =>
  class Manager extends React.Component<any, any> {
    constructor(props: any) {
      super({...props, ...options});
    }
    render() {
      return <Enhanced {...this.props} />
    }
  };

export default BaseManager;
