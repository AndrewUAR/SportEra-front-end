import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import classNames from 'classnames';
import { Form, InputGroup } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import styles from '../../assets/jss/components/formInputStyles.jss';

const useStyles = createUseStyles(styles);

type FormProps = {
    controlId: string;
    label: string;
    type?: string;
    color?: 'blue' | 'dark';
    placeholder: string;
    value: string;
    name: string;
    disabled?: boolean;
    isValid?: boolean;
    isInvalid?: boolean;
    textHelp?: string;
    error?: string;
    icon?: React.ReactNode;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type InferredProps = InferProps<typeof FormInput.propTypes>;

const defaultProps = {
    type: 'text',
    error: '',
    disabled: false,
    isValid: false,
    isInvalid: false,
    textHelp: '',
    icon: '',
    color: 'blue' as 'blue' | 'dark',
};

const FormInput: React.FC<FormProps> = (props: InferredProps & FormProps) => {
    const {
        controlId,
        label,
        type,
        placeholder,
        value,
        name,
        onChange,
        disabled,
        isValid,
        isInvalid,
        error,
        textHelp,
        icon,
        color = 'blue',
    } = props;

    const classes = useStyles();

    const inputClasses = classNames({
        [classes.input]: true,
        [classes[color]]: color,
    });

    return (
        <Form.Group className={classes.formGroup} controlId={controlId}>
            <Form.Label className={classes.label}>{label}</Form.Label>
            <InputGroup>
                {icon && (
                    <InputGroup.Prepend>
                        <InputGroup.Text className={classes.inputIcon} id="inputGroupPrepend">
                            {icon}
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                )}
                <Form.Control
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onChange}
                    disabled={disabled}
                    isValid={isValid}
                    isInvalid={isInvalid}
                    className={inputClasses}
                />
            </InputGroup>
            {textHelp && <Form.Text id={controlId}>{textHelp}</Form.Text>}
            {error && (
                <Form.Control.Feedback className={classes.feedback} type="invalid">
                    {error}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    );
};

FormInput.defaultProps = defaultProps;

FormInput.propTypes = {
    controlId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    isValid: PropTypes.bool,
    isInvalid: PropTypes.bool,
    textHelp: PropTypes.string,
    error: PropTypes.string,
    icon: PropTypes.node,
    color: PropTypes.oneOf(['blue', 'dark']),
};

export default FormInput;
