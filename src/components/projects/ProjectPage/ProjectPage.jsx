import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "./projectData";

function ProjectPage() {
    const { projectId } = useParams();

    const project = projectList.find((p) => p.id === projectId);

    if (!project) {
        return <p>no project found</p>;
    }

    return (
        <div>
            <h3>Project: {project.name}</h3>
            <p>{project.desc}</p>
        </div>
    );
};

export default ProjectPage;