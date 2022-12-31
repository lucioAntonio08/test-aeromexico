import React, {FC} from 'react';
import styles from './styles.module.scss'

interface GenericCardProps {
    children: JSX.Element
}


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
