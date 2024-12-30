import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { projectList } from "./ProjectPage/projectData";


function Projects() {
    const { projectId } = useParams();

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projectList.map((project) => (
                    <li key={project.id}>
                        <Link to={`/projects/${project.id}`}>{project.name}</Link>
                    </li>
                ))}
            </ul>
            <div>
                {projectId ? <Outlet /> : <p>please select a project</p>}
            </div>
        </div>
    );
};

export default Projects;