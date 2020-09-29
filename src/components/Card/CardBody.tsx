import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Card } from 'react-bootstrap';

type CardBodyProps = {
    children: React.ReactNode;
};

type InferredProps = InferProps<typeof CardBody.propTypes>;

const CardBody: React.FC<CardBodyProps> = (props: InferredProps & CardBodyProps) => {
    const { children } = props;
    return <Card.Body>{children}</Card.Body>;
};

CardBody.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CardBody;
