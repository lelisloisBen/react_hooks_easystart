import React from 'react';
import styles from './Loading.module.css';

import share from '../../../img/icon.png';

const Loading = () => {
    return (
        <div className={styles.section}>
            <div className={styles.shareLoading}>
                <img src={share} alt="sharesensation"/>
            </div>
        </div>
    );
};

export default Loading;