import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Form } from 'react-bootstrap';

type FormProps = {
    controlId: string;
    label: string;
    type?: string;
    placeholder: string;
    value: string;
    name: string;
    disabled: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type InferredProps = InferProps<typeof FormInput.propTypes>;

const defaultProps = {
    type: 'text',
};

const FormInput: React.FC<FormProps> = (props: InferredProps & FormProps) => {
    const { controlId, label, type, placeholder, value, name, onChange, disabled } = props;

    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                disabled={disabled}
            />
        </Form.Group>
    );
};

FormInput.defaultProps = defaultProps;

FormInput.propTypes = {
    controlId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default FormInput;
