import React from 'react';
import {Text} from "@mantine/core";
import CardIcon from "../card-icon";
import styles from './styles.module.scss'
import {OptionCardIcons} from "../../interface";


const DirectAccess = () => {
    return (
        <div className={styles.main}>
            <Text className={styles.title}>Accesos directos</Text>
            <div className={styles.cont}>
                {
                    OptionCardIcons.map(el=>(
                        <CardIcon icon={el.icon} name={el.name}/>
                    ))
                }

            </div>
        </div>
    );
};

export default DirectAccess;
