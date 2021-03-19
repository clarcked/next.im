import React from "react";

export interface MasterProps {}

export interface MasterState {}

class Master extends React.Component<MasterProps, MasterState> {
  render() {
    return (
      <div>
        <div>Master list of your project</div>
      </div>
    );
  }
}

export default Master;
