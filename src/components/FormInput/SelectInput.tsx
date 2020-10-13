import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import styles from '../../assets/jss/components/formInputStyles.jss';

const useStyles = createUseStyles(styles);

type SelectInputProps = {
    controlId: string;
    label: string;
    value: string;
    name: string;
    color?: 'blue' | 'dark';
};

const defaultProps = {
    color: 'blue' as 'blue' | 'dark',
};

type InferredProps = InferProps<typeof SelectInput.propTypes>;

const SelectInput: React.FC<SelectInputProps> = (props: InferredProps & SelectInputProps) => {
    const { controlId, name, value, label, color = 'blue' } = props;
    const classes = useStyles();

    const inputClasses = classNames({
        [classes.input]: true,
        [classes[color]]: color,
    });

    return (
        <Form.Group className={classes.formGroup}>
            <Form.Label className={classes.label}>{label}</Form.Label>
            <Form.Control as="select" className={inputClasses} id={controlId} custom>
                <option value="0">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Control>
        </Form.Group>
    );
};

SelectInput.defaultProps = defaultProps;

SelectInput.propTypes = {
    controlId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['blue', 'dark']),
};

export default SelectInput;
