import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Card } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import styles from '../../assets/jss/components/cardStyles.jss';

const useStyles = createUseStyles(styles);

type CardHeaderProps = {
    children: React.ReactNode;
    loginRegisterHeader?: boolean;
};

type InferredProps = InferProps<typeof CardHeader.propTypes>;

const defaultProps = {
    loginRegisterHeader: false,
};

const CardHeader: React.FC<CardHeaderProps> = (props: InferredProps & CardHeaderProps) => {
    const classes = useStyles();
    const { children, loginRegisterHeader } = props;
    const cardHeaderStyles = classNames({
        [classes.loginRegisterHeader]: loginRegisterHeader,
    });
    return <Card.Header className={cardHeaderStyles}>{children}</Card.Header>;
};

CardHeader.defaultProps = defaultProps;

CardHeader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    loginRegisterHeader: PropTypes.bool,
};

export default CardHeader;
