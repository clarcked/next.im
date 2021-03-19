import React from "react";

export interface ProjectProps {}

export interface ProjectState {}

class Project extends React.Component<ProjectProps, ProjectState> {
  render() {
    return (
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ipsam tenetur, cupiditate quidem sunt repudiandae quisquam pariatur
          eum eos atque ullam doloribus iure qui fugiat, perspiciatis vitae
          obcaecati natus perferendis.
        </div>
      </div>
    );
  }
}

export default Project;
