import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProfessional = async (professionalId: string) => {
  const { data } = await axios.get(`http://localhost:8000/professionals/${professionalId}`);
  return data;
};

export const useFetchProfessional = (professionalId: string) => {
  return useQuery({
    queryKey: ['professional', professionalId],
    queryFn: () => fetchProfessional(professionalId),
  });
};
