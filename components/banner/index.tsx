import React, {useEffect, useState} from 'react';
import {Carousel} from '@mantine/carousel';
import styles from './styles.module.scss'
import CardBanner from "../card-banner";
import axios from "axios";
import {CardBannerProps} from "../../interface";
import {Loader} from "@mantine/core";


const BannerAeroMexico = () => {


    const [posts, setPosts] = useState<CardBannerProps[]>([]);
    const getPost = async ()=>{
        try{
            const {data} = await axios.get('https://dummyjson.com/posts')
            const {posts:arrPosts} = data;
            let test = [];
            for (let i = 0; i < 6; i++) {
                test.push(arrPosts[Math.floor(Math.random() * arrPosts.length)])
            }
            setPosts(test)
            console.log(test)
        } catch (e:any) {
            console.log(e)
        } finally {

        }
    }
    useEffect(() => {
      getPost()
    }, []);


    return (
        <div className={styles.main}>
            {
                posts.length  === 0 ? <Loader size="xl" className={styles.loader} /> :
                <Carousel
                    withControls={false}
                    withIndicators loop >
                    {
                        posts.map(el=>(
                                <Carousel.Slide
                                    key={el.id}
                                >
                                    <CardBanner
                                        title={el.title }
                                        body={el.body }
                                        id={el.id}
                                    />
                                </Carousel.Slide>
                        ))
                    }
                </Carousel>
            }

        </div>
    );
};

export default BannerAeroMexico;
