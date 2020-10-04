export const apiEndPoint = (): string => 'http://localhost:8080';

export const configHeader = (): { headers: { 'Content-Type': string }; withCredentials: boolean } => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    };
    return config;
};
