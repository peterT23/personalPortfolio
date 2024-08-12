import React from "react";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &#169;2023 Duy Thang Nguyen
        <br />
        All right reserved
      </p>
    </section>
  );
}

export default Footer;
