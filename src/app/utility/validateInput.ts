import validator from 'validator';

type ValidateInputsProps = {
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    emailConfirm?: string;
    password?: string;
    passwordConfirm?: string;
};

type ErrorProps = {
    setError: (error: string) => void;
};

export const validateInputs = (userData: ValidateInputsProps, error: ErrorProps) => {};
