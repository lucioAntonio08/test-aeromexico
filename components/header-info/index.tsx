import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'
import {Text, Button, Loader} from "@mantine/core";
import axios from "axios";

const HeaderInfo = () => {

    const [comment, setComment] = useState<string>('');

    const getInfo = async () => {
        try {
            const {data} = await axios.get('https://dummyjson.com/posts')
            const {posts} = data;
            const getRandomComment = posts.map(function (arr: any){
                return arr.title
            })
            const changeInfo = getRandomComment[Math.floor(Math.random()*getRandomComment.length)]
            setComment(changeInfo)
        } catch (e: any) {
            console.log(e)
        } finally {

        }
    }

    useEffect(() => {
        getInfo()
    }, []);


    return (
        <div className={styles.main}>
            <div className={styles.cont} >
                {
                    comment.length === 0 && <Loader size={"lg"} color={'dark'} />
                }
             <Text>{comment}
             </Text>
            </div>
            <Button
                className={styles.btn}
            >Acceder
            </Button>
        </div>
    );
};

export default HeaderInfo;
