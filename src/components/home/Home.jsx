import React from "react";
import styles from './Home.module.scss';

function Home() {
    return (
        <header className={styles.header}>
            <div className={styles.titleBox}>
                <h1>Paul Possart</h1>
                <div className={styles.titleShape1}></div>
                <div className={styles.titleShape2}></div>
                <div className={styles.titleShape3}></div>
                <div className={styles.titleShape4}></div>
            </div>
            <h2>frontend developer</h2>
        </header>
    );
};

export default Home;
