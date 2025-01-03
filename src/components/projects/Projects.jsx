import React, { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { projectList } from "./ProjectPage/projectData";
import styles from './Projects.module.scss';
import expandIcon from '../../assets/icons/chevrons-right-svgrepo-com.svg';


function Projects() {
    const { projectId } = useParams();
    const [isLandscape, setIsLandscape] = useState(window.matchMedia('(orientation: landscape)'))
    const [isExpanded, setIsExpanded] = useState(isLandscape ? true : false);

    useEffect(() => {
        const handleOrientationChange = (event => {
            setIsLandscape(event.matches);
            setIsExpanded(event.matches);
        });

        const mediaQuery = window.matchMedia('(orientation: landscape)');
        mediaQuery.addEventListener('change', handleOrientationChange);
        setIsLandscape(mediaQuery.matches);
        setIsExpanded(mediaQuery.matches);

        return () => {
            mediaQuery.removeEventListener('change', handleOrientationChange);
        }
    }, [])

    return (
        <div>
            <nav className={styles.navbar}>
                <ul >
                    {projectList.map((project) => (
                        <li key={project.id}>

                            <Link to={`/projects/${project.id}`}>
                                <div className={styles.navOption}>
                                    <span className={`${isExpanded ? styles.navExtend : styles.navCollapse} ${styles[project.id]}`}>{project.name}</span>
                                    {project.icon ? (
                                        <img src={project.icon} alt={`${project.name} icon`} />
                                    ) : (
                                        <p className={styles.pTag}>P</p>
                                    )}
                                </div>
                            </Link>
                        </li>
                    ))}
                    <li><img class={`${styles.icon} ${isExpanded ? styles.iconLeft : styles.iconRight}`} onClick={() => { setIsExpanded(!isExpanded) }} src={expandIcon} /></li>
                </ul>
            </nav>
            <div className={styles.viewContainer}>
                <div className={styles.projectView}>
                    {projectId ? <Outlet /> : <p className={styles.pleaseSelect}>please select a project</p>}
                </div>
            </div>
        </div>
    );
};

export default Projects;