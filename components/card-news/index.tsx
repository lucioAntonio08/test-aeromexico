import React, {FC} from 'react';
import Image from "next/image";
import {Text} from "@mantine/core";
import {quetzalcoatl} from "../../public/statics/images";
import styles from './styles.module.scss'
import {CardNewsProps} from "../../interface";



const CardNews: FC<CardNewsProps> = ({text,}) => {
    return (
        <div
            className={styles.main}>
            <div className={styles.cont}>
                <Image
                    className={styles.img}
                    width={220}
                    height={100}
                    src={quetzalcoatl}
                    alt={'news-aeromexico'}/>
            </div>
            <Text
            className={styles.text}
            >{text}</Text>
        </div>
    );
};

export default CardNews;
