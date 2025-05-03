import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = (props) => {
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const detailsModalShowHandler = (data) => {
    setDetailsModalShow(true);
    setSelectedProject(data);
  };

  const detailsModalCloseHandler = () => {
    setDetailsModalShow(false);
  };

  const { resumeProjects, resumeBasicInfo } = props;

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
          <div className="foto" onClick={() => <a href="https://food-adda-delta.vercel.app/"> </a>}>
            <div>
              <img
                src={project.images[0]}
                alt="projectImages"
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
          show={detailsModalShow}
          onHide={detailsModalCloseHandler}
          data={selectedProject}
        />
      </div>
    </section>
  );
};

export default Projects;