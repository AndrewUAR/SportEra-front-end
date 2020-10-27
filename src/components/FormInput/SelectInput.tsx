import React from 'react';
import Select, { ActionMeta, GroupedOptionsType, OptionsType, OptionTypeBase, ValueType } from 'react-select';
import PropTypes, { InferProps } from 'prop-types';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import styles from '../../assets/jss/components/formInputStyles.jss';

const useStyles = createUseStyles(styles);

interface SelectInputProps<OptionType extends OptionTypeBase = { label: string; value: string }> {
    label: string;
    options: OptionsType<OptionType>;
    isLoading: boolean;
    isDisabled: boolean;
    isMulti: boolean;
    name: string;
    onChange: (value: ValueType<OptionType>, actionMeta: ActionMeta<OptionType>) => void;
    color?: 'blue' | 'dark';
}

const defaultProps = {
    color: 'blue' as 'blue' | 'dark',
};

type InferredProps = InferProps<typeof SelectInput.propTypes>;

const SelectInput: React.FC<SelectInputProps> = (props: InferredProps & SelectInputProps) => {
    const { name, options, label, isMulti, color = 'blue', isLoading, isDisabled, onChange } = props;
    const classes = useStyles();

    const inputClasses = classNames({
        [classes.input]: true,
        [classes[color]]: color,
    });

    return (
        <Form.Group className={classes.formGroup}>
            <Form.Label className={classes.label}>{label}</Form.Label>
            <Select
                defaultValue={options[0]}
                isMulti={isMulti}
                isLoading={isLoading}
                isDisabled={isDisabled}
                name={name}
                options={options}
                onChange={onChange}
            />
        </Form.Group>
    );
};

SelectInput.defaultProps = defaultProps;

SelectInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['blue', 'dark']),
};

export default SelectInput;
