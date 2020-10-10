import axios from 'axios';
import { apiEndPoint, configHeader } from '../../config';
import { UserLoginState, UserRegisterState } from '../constants/authTypes';

const API_ENDPOINT = apiEndPoint();
const config = configHeader();

export const signUpUser = async (userData: UserRegisterState): Promise<void> => {
    await axios.post(`${API_ENDPOINT}/api/1.0/auth/signup`, userData, config);
};

export const signInUser = async (userData: UserLoginState): Promise<any> => {
    const response = await axios.post(`${API_ENDPOINT}/api/1.0/auth/signin`, userData, config);
    return response;
};

export const forgotPassword = async (userEmail: string): Promise<void> => {
    await axios.post(`${API_ENDPOINT}/api/1.0/auth/forgot-password?email=${userEmail}`, config);
};
