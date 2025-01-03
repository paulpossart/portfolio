import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "./projectData";
import styles from './ProjectPage.module.scss';

function ProjectPage() {
    const { projectId } = useParams();

    const project = projectList.find((p) => p.id === projectId);

    if (!project) {
        return <p>no project found</p>;
    }

    return (
        <div className={styles.container}>
            <h3>Project: {project.name}</h3>
            <p>{project.desc}</p>
        </div>
    );
};

export default ProjectPage;