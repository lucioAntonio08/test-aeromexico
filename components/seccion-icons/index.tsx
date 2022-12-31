import React from 'react';
import {Text} from "@mantine/core";
import CardIcon from "../card-icon";
import styles from './styles.module.scss'

const DirectAccess = () => {
    return (
        <div className={styles.main}>
            <Text className={styles.title}>Accesos directos</Text>
            <div className={styles.cont}>
                <CardIcon/>
                <CardIcon/>
                <CardIcon/>
                <CardIcon/>
                <CardIcon/>
            </div>
        </div>
    );
};

export default DirectAccess;
