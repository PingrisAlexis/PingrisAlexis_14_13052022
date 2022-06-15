import React, { FunctionComponent } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const Header:FunctionComponent = ():JSX.Element => {
    return (
        <header className={styles.header_container}>
                <Link to='/'>
                    <h1>HRnet</h1>
                </Link>
                <Link to='/employee-list'>
                    <FontAwesomeIcon  icon={faUsers} className={styles.header_icon} aria-labelledby="employee list icon" />
                </Link>
         </header>
     )
}

export default Header; 