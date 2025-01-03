import { CreateUserType } from '../types/apiTypes';
import api from './api';

export const fetchUserRole = async () => {
  const response = await api.get('/users/role');
  return response.data;
};

export const fetchUserData = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const submitUserData = async (data: CreateUserType) => {
  const response = await api.post('/users', data);
  return response.data;
};
