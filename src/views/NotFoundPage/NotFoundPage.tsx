import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { createUseStyles } from 'react-jss';
import styles from '../../assets/jss/views/notFoundPageStyles.jss';

const useStyles = createUseStyles(styles);

const NotFoundPage: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.code}>404</div>
                <div className={classes.message}>Page Not Found</div>
                <Button href="/" className={classes.button}>Return to SportEra</Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
