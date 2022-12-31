import React from 'react';
import styles from './styles.module.scss'
import {Text,Button} from "@mantine/core";

const HeaderInfo = () => {
    return (
        <div className={styles.main}>
            <div className={styles.cont} >
             <Text>Bienvenido (a) a ambot, aquí tienes disponible una
                 guía y atención de salud y bienestar emocional las 24h.
             </Text>
                <Button
                    className={styles.btn}
                >Acceder</Button>
            </div>
        </div>
    );
};

export default HeaderInfo;
