import React from "react";

const BaseCard = (Enhanced, options: any) =>
  class Card extends React.Component<any, any> {
    constructor(props: any) {
      super({...props, ...options});
    }
    render() {
      return <Enhanced {...this.props} />
    }
  };

export default BaseCard; 
