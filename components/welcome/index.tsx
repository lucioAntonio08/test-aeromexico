import React from 'react';
import GenericCard from "../generic-card";
import {Avatar, Text, Badge} from "@mantine/core";
import styles from './styles.module.scss'

const WelcomeUser = () => {
    return (
        <div className={styles.main}>
            <GenericCard>
                <div
                    className={styles.cardUser}
                >
                    <Avatar size="lg"
                            radius='xl'
                    >AL</Avatar>
                    <div className={styles.contUser}>
                        <Text>
                            Bienvenido (A),
                            Antonio Lucio!</Text>
                        <Badge
                            color="blue"
                            variant="light">
                            Mi Experiencia AM
                        </Badge>
                    </div>
                </div>
            </GenericCard>
            <GenericCard>
                <div className={styles.cardNps}>
                    <Text
                        className={styles.title}
                    >NET PROMOTER SCORE (NPS)</Text>
                    <div className={styles.contNps}>
                        <Text
                            className={styles.number}
                        >36.04%</Text>
                        <Text
                            className={styles.update}
                        >Actualizado en agosto del 2022</Text>
                        <Text
                            className={styles.discover}
                        >Descubre más sobre el NPS</Text>
                    </div>
                </div>
            </GenericCard>
            <GenericCard>
                <div className={styles.flightPlan}>
                    <Text className={styles.title} >PLAN DE VUELO</Text>
                    <div className={styles.contFlightPlan} >
                        <Text className={styles.text}>Resurgir con nuestra mejor
                            versión</Text>
                        <Text
                            className={styles.text}
                        >Construir hoy para el
                            futuro</Text>
                        <Text
                            className={styles.text}
                        >Convertirnos en una marca
                            amada</Text>
                        <Text className={styles.update}>Actualizado en abril 2022</Text>
                        <Text className={styles.seeFlight}>VER PLAN DE VUELO</Text>
                    </div>
                </div>
            </GenericCard>
        </div>

    );
};

export default WelcomeUser;
