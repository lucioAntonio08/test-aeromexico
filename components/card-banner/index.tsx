import React, {FC} from 'react';
import {Button, Text} from "@mantine/core";
import styles from './styles.module.scss'
import {CardBannerProps} from "../../interface";




const CardBanner: FC<CardBannerProps>= ({id,title,body}) => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <Text className={styles.title}>Grupo Aeromexico</Text>
                <Text className={styles.question}>
                    {title}
                </Text>
                <Text className={styles.post} >
                    {body}
                </Text>
                <Button
                    className={styles.btn}
                >Conoce más</Button>
            </div>
        </div>
    );
};

export default CardBanner;
