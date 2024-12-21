import React from "react";
import styles from "./Contact.module.scss"

function Contact() {
    return (
        <section class={styles.contact}>
            <div class={styles.contactWrapper}>
                <a href="mailto:#" class={`${styles.secondaryButton} ${styles.mailme}`}>emailme@email.email</a>
                <form action="#" method="POST" class={styles.contactForm}>
                    <input type="text" class={styles.input} placeholder=" Your name" required />
                    <input type="email" class={styles.input} placeholder=" Your email" required />
                    <textarea class={`${styles.input} ${styles.textarea}`} placeholder=" Your message" required />
                    <button type="submit" class={`${styles.primaryButton} ${styles.submit}`}>submit</button>
                </form>
            </div>
        </section>);
};

export default Contact;