import React, {useEffect, useState} from 'react';
import GenericCard from "../generic-card";
import {Avatar, Text, Badge, Skeleton, ScrollArea, Loader} from "@mantine/core";
import styles from './styles.module.scss'
import axios from "axios";
import {GetUserProps} from "../../interface";



const WelcomeUser = () => {
    const [user, setUser] = useState<GetUserProps[]>([]);

    const getUser = async () => {
        try {
            const {data} = await axios.get('https://dummyjson.com/users')
            const {users} = data;
            let test = [];
            for (let i = 0; i < 1; i++) {

                test.push(users[Math.floor(Math.random() * users.length)])

            }
            setUser(test)
        } catch (e: any) {
            console.log(e)
        } finally {

        }
    }
    useEffect(() => {
        getUser()
    }, []);

    return (
        <div className={styles.main}>
            <ScrollArea style={{height: 520}} offsetScrollbars>
                <GenericCard>
                    <>
                        {
                            user.length === 0 ? <Loader size={'lg'} className={styles.loader}/> : user.map(el => (
                                <div
                                    key={el.id}
                                    className={styles.cardUser}
                                >
                                    <Avatar size="xl"
                                            radius='xl'
                                            src={el.image}
                                    ></Avatar>
                                    <div className={styles.contUser}>
                                        <Text>
                                            Bienvenido (A), <br/>
                                            {el.firstName}!</Text>
                                        <Badge
                                            color="blue"
                                            variant="light">
                                            Mi Experiencia AM
                                        </Badge>
                                    </div>
                                </div>
                            ))
                        }
                    </>
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
                        <Text className={styles.title}>PLAN DE VUELO</Text>
                        <div className={styles.contFlightPlan}>
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
            </ScrollArea>
        </div>

    );
};

export default WelcomeUser;
