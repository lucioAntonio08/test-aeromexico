import React, {FC} from 'react';
import styles from './styles.module.scss'
import {GenericCardProps} from "../../interface";



const GenericCard: FC<GenericCardProps> = ({children})=> {
    return (
        <div
        className={styles.main}
        >
            {
                children
            }
        </div>
    );
};

export default GenericCard;
