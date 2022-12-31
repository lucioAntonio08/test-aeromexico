import React from 'react';
import {Text} from "@mantine/core";
import CardNews from "../card-news";
import styles from './styles.module.scss'

const News = () => {
    return (
        <div className={styles.main}>
            <Text className={styles.title} >Últimas noticias</Text>
            <div className={styles.cont}>
                <CardNews text={'Cómo hackean tu WhatsApp en 3 pasos'}/>
                <CardNews text={'Cómo hackean tu WhatsApp en 3 pasos'}/>
                <CardNews text={'Cómo hackean tu WhatsApp en 3 pasos'}/>
                <CardNews text={'Cómo hackean tu WhatsApp en 3 pasos'}/>
                <CardNews text={'Cómo hackean tu WhatsApp en 3 pasos'}/>
                <CardNews text={'Cómo hackean tu WhatsApp en 3 pasos'}/>
            </div>
        </div>
    );
};

export default News;
