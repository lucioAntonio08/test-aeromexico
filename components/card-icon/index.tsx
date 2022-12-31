import React from 'react';
import Image from "next/image";
import {avion} from "../../public/statics/images";
import {Text} from "@mantine/core";
import styles from './styles.module.scss'

const CardIcon = () => {
    return (
        <div className={styles.main}>
            <div className={styles.cont} >
                <Image
                    className={styles.img}
                    width={80}
                    src={avion}
                    alt={'icon-card'}
                />
                <Text>Codigo de conducta</Text>
            </div>
        </div>
);
};

export default CardIcon;
