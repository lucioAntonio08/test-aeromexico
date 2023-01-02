import React, {useEffect, useState,Suspense} from 'react';
import {Loader, Text} from "@mantine/core";
import CardNews from "../card-news";
import styles from './styles.module.scss'
import axios from "axios";

const News = () => {

    const [news, setNews] = useState<any[]>([]);

    const getNews= async ()=>{
        try{
            const{data} = await axios.get('https://dummyjson.com/comments')
            const {comments} = data;
            let test = [];
            for (let i = 0; i < 6; i++) {

                test.push(comments[Math.floor(Math.random() * comments.length)])
            }
            setNews(test)
        } catch (e:any) {

        } finally {

        }
    }
    useEffect(() => {
        getNews()
    }, []);

    return (
        <div className={styles.main}>
            <Text className={styles.title} >Últimas noticias</Text>
            <div className={styles.cont}>
                {
                   news.length === 0 ? <Loader size="xl" className={styles.loader} /> : news.map((el:any)=>(
                       <div
                           className={styles.card}
                           key={el.id}>
                           <CardNews
                               text={el.body}/>
                       </div>
                    ))
                }
            </div>
        </div>
    );
};

export default News;
