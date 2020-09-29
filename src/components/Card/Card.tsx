import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Card } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import styles from '../../assets/jss/components/cardStyles.jss';

const useStyles = createUseStyles(styles);

type CustomCardProps = {
    children: React.ReactNode;
    loginRegisterCard?: boolean;
};

type InferredProps = InferProps<typeof CustomCard.propTypes>;

const defaultProps = {
    loginRegisterCard: false,
};

const CustomCard: React.FC<CustomCardProps> = (props: InferredProps & CustomCardProps) => {
    const classes = useStyles();
    const { children, loginRegisterCard } = props;
    const cardStyles = classNames({
        [classes.card]: true,
        [classes.loginRegisterCard]: loginRegisterCard,
    });
    return <Card className={cardStyles}>{children}</Card>;
};

CustomCard.defaultProps = defaultProps;

CustomCard.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    loginRegisterCard: PropTypes.bool,
};

export default CustomCard;
