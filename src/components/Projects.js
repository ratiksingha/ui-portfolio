import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: {},
      detailsModalShow: false,
    };
  }

  detailsModalShowHandler = (data) => {
    this.setState({ detailsModalShow: true, selectedProject: data });
  };

  detailsModalCloseHandler = () => {
    this.setState({ detailsModalShow: false });
  };

  render() {
    const { resumeProjects, resumeBasicInfo } = this.props;

    let sectionName = "";
    let projects = [];

    if (resumeProjects && resumeBasicInfo) {
      sectionName = resumeBasicInfo.section_name.projects;
      projects = resumeProjects.map((project) => (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={project.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div
              className="foto"
              onClick={() => this.detailsModalShowHandler(project)}
            >
              <div>
                <img
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  height="230"
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
                <span className="project-date">{project.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">{project.title}</p>
              </div>
            </div>
          </span>
        </div>
      ));
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={this.detailsModalCloseHandler}
            data={this.state.selectedProject}
          />
        </div>
      </section>
    );
  }
}

export default Projects;