import { ProfessionalType } from '@customTypes/Professional';
import axios from 'axios';

export const fetchProfessional = async (professionalId: string): Promise<ProfessionalType> => {
  const { data } = await axios.get(`http://localhost:8000/professionals/${professionalId}`);
  return data;
};
