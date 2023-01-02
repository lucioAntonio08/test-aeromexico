import React, {FC} from 'react';
import Image from "next/image";
import {Text} from "@mantine/core";
import styles from './styles.module.scss'
import {CardIconProps} from "../../interface";


const CardIcon: FC<CardIconProps> = ({name,icon}) => {
    return (
        <div className={styles.main}>
            <div className={styles.cont}>
                <Image
                    className={styles.img}
                    width={80}
                    src={icon}
                    alt={'icon-card'}
                />
                <Text>{name}</Text>
            </div>
        </div>
    );
};

export default CardIcon;
