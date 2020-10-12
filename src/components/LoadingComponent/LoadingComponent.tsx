import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from '../../assets/jss/components/loadingComponentStyles.jss';

const useStyles = createUseStyles(styles);

const LoadingComponent = () => {
    const classes = useStyles();

    return (
      <div className={classes.container}>
        <div className={classes.box}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
        </div>
        </div>
    );
};

export default LoadingComponent;
