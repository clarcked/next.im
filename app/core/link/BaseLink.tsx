import React from "react";

const BaseLink = (Enhanced, options: any) =>
  class Link extends React.Component<any, any> {
    constructor(props: any) {
      super({...props, ...options});
    }
    render() {
      return <Enhanced {...this.props} />
    }
  };

export default BaseLink;
