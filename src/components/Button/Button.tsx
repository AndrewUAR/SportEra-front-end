import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Button from 'react-bootstrap/esm/Button';

type CustomButtonProps = {
    children: React.ReactNode;
    type?: string;
    href?: string;
    size: 'sm' | 'lg' | undefined;
    disabled: boolean;
};

type InferredProps = InferProps<typeof CustomButton.propTypes>;

const defaultProps = {
    type: '',
    href: '#',
    size: undefined,
};

const CustomButton: React.FC<CustomButtonProps> = (props: InferredProps & CustomButtonProps) => {
    const { children, type, href, size, disabled } = props;
    return (
        <Button type={type} href={href} size={size} disabled={disabled}>
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
    disabled: PropTypes.bool.isRequired,
};

export default CustomButton;
