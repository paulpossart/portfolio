import React from "react";
import styles from "./Contact.module.scss"

function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.contactWrapper}>
                <a href="mailto:#" className={`${styles.secondaryButton} ${styles.mailme}`}>emailme@email.email</a>
                <form action="#" method="POST" class={styles.contactForm}>
                    <input type="text" className={styles.input} placeholder=" Your name" required />
                    <input type="email" className={styles.input} placeholder=" Your email" required />
                    <textarea className={`${styles.input} ${styles.textarea}`} placeholder=" Your message" required />
                    <button type="submit" className={`${styles.primaryButton} ${styles.submit}`}>submit</button>
                </form>
            </div>
        </section>);
};

export default Contact;