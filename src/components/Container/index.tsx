import { useFetchProfessional } from '@hooks/useFetchProfessional';
import { User } from 'src/types/User';
import { LoadingOverlay, ProfileContainer, ProfileInfo, Schedule, ScheduleContainer } from '../index';
import { ContainerStyled } from './styles';

export const Container = () => {
  const {
    data: professional,
    isLoading,
    isError,
    error,
  } = useFetchProfessional<User>('f67f4224-b0a1-4b55-9d15-4e48f933fd47');

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (isError) {
    return <div>Erro ao carregar os dados: {error?.message}</div>;
  }

  return (
    <ContainerStyled>
      {professional && (
        <>
          <ProfileContainer>
            <ProfileInfo {...professional} />
          </ProfileContainer>
          <ScheduleContainer>
            <Schedule schedule={professional.schedule} />
          </ScheduleContainer>
        </>
      )}
    </ContainerStyled>
  );
};
