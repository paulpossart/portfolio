import React from "react";
import styles from "./About.module.scss"
/*
import figmaImg from "../../assets/icons/figma-svgrepo-com.svg";
import vscImg from "../../assets/icons/vs-code-svgrepo-com.svg";
import htmlImg from "../../assets/icons/html-5-svgrepo-com.svg";
import cssImg from "../../assets/icons/css-3-svgrepo-com.svg";
import scssImg from "../../assets/icons/scss2-svgrepo-com.svg";
import jsImg from "../../assets/icons/javascript-svgrepo-com.svg";
import reactImg from "../../assets/icons/react-svgrepo-com.svg";
import reactRouterImg from "../../assets/icons/react-router-white-svgrepo-com.svg";
import reduxImg from "../../assets/icons/redux-svgrepo-com.svg";
import mochaImg from "../../assets/icons/mocha-svgrepo-com.svg";
import jestImg from "../../assets/icons/jest-snapshot-svgrepo-com.svg";
import gitImg from "../../assets/icons/git-svgrepo-com.svg";
import githubImg from "../../assets/icons/github-color-svgrepo-com.svg";
*/
function About() {
    return (
        <section>
            <div className={styles.about}>
                <p>
                    About section text.
                </p>
                <div className={styles.iconWrapper}>
                    <div className={styles.iconContainer}>
                        <div className={styles.iconScroll}>
                            {/*
                            <img src={figmaImg} />
                            <img src={vscImg} />
                            <img src={htmlImg} />
                            <img src={cssImg} />
                            <img src={scssImg} />
                            <img src={jsImg} />
                            <img src={reactImg} />
                            <img src={reactRouterImg} />
                            <img src={reduxImg} />
                            <img src={mochaImg} />
                            <img src={jestImg} />
                            <img src={gitImg} />
                            <img src={githubImg} />

                            <img src={figmaImg} />
                            <img src={vscImg} />
                            <img src={htmlImg} />
                            <img src={cssImg} />
                            <img src={scssImg} />
                            <img src={jsImg} />
                            <img src={reactImg} />
                            <img src={reactRouterImg} />
                            <img src={reduxImg} />
                            <img src={mochaImg} />
                            <img src={jestImg} />
                            <img src={gitImg} />
                            <img src={githubImg} />
                            */}                    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;