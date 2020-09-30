import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import Button from 'react-bootstrap/esm/Button';
import styles from '../../assets/jss/components/buttonStyles.jss';

const useStyles = createUseStyles(styles);

type CustomButtonProps = {
    children: React.ReactNode;
    type?: string;
    href?: string;
    size?: 'sm' | 'lg';
    disabled?: boolean;
    fullWidth?: boolean;
    color?: 'red' | 'green' | 'blue';
    rounded?: boolean;
};

type InferredProps = InferProps<typeof CustomButton.propTypes>;

const defaultProps = {
    type: 'button',
    href: '#',
    size: 'sm' as 'sm' | 'lg',
    disabled: false,
    fullWidth: false,
    color: 'blue' as 'red' | 'green' | 'blue',
    rounded: false,
};

const CustomButton: React.FC<CustomButtonProps> = (props: InferredProps & CustomButtonProps) => {
    const classes = useStyles();
    const { children, type, href, size, disabled, fullWidth, color = 'blue', rounded } = props;
    const buttonClasses = classNames({
        [classes.fullWidth]: fullWidth,
        [classes[color]]: color,
        [classes.rounded]: rounded,
    });
    return (
        <Button className={buttonClasses} type={type} href={href} size={size} disabled={disabled}>
            {children}
        </Button>
    );
};

CustomButton.defaultProps = defaultProps;

CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    href: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg', undefined]),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    color: PropTypes.oneOf(['blue', 'red', 'green']),
    rounded: PropTypes.bool,
};

export default CustomButton;
