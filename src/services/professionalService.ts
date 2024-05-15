import axios from 'axios';
import { User } from 'src/types/User';

export const fetchProfessional = async (professionalId: string): Promise<User> => {
  const { data } = await axios.get(`http://localhost:8000/professionals/${professionalId}`);
  return data;
};
