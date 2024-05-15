import { fetchProfessional } from '@services/professionalService';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { User } from 'src/types/User';

export const useFetchProfessional = <T = User>(professionalId: string): UseQueryResult<T, Error> => {
  return useQuery({
    queryKey: ['professional', professionalId],
    queryFn: () => fetchProfessional(professionalId),
  });
};
