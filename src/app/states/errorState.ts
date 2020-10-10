export interface IErrorState {
    error: string;
    validationErrors: {
        username: string;
        email: string;
        password: string;
    };
}
