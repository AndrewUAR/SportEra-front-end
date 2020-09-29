import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Card } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import styles from '../../assets/jss/components/cardStyles.jss';

const useStyles = createUseStyles(styles);

type CardFooterProps = {
    children: React.ReactNode;
    loginRegisterFooter?: boolean;
};

type InferredProps = InferProps<typeof CardFooter.propTypes>;

const defaultProps = {
    loginRegisterFooter: false,
};

const CardFooter: React.FC<CardFooterProps> = (props: InferredProps & CardFooterProps) => {
    const classes = useStyles();
    const { children, loginRegisterFooter } = props;
    const cardFooterStyles = classNames({
        [classes.loginRegisterFooter]: loginRegisterFooter,
    });
    return <Card.Footer className={cardFooterStyles}>{children}</Card.Footer>;
};

CardFooter.defaultProps = defaultProps;

CardFooter.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    loginRegisterFooter: PropTypes.bool,
};

export default CardFooter;
