import { ProfessionalType } from '@customTypes/Professional';
import { fetchProfessional } from '@services/professionalService';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useFetchProfessional = <T = ProfessionalType>(professionalId: string): UseQueryResult<T, Error> => {
  return useQuery({
    queryKey: ['professional', professionalId],
    queryFn: () => fetchProfessional(professionalId),
  });
};
