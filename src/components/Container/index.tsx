import { Calendar, CalendarContainer, Error, LoadingOverlay, ProfileContainer, ProfileInfo } from '@components/index';
import { ProfessionalType } from '@customTypes/Professional';
import { useDateRange } from '@hooks/useDateRange';
import { useFetchProfessional } from '@hooks/useFetchProfessional';
import { getDatesInRange } from '@utils/getDatesInRange';
import { ContainerStyled } from './styles';

export const Container = () => {
  const { dateRange, changeDateRange } = useDateRange();
  const datesToShow = getDatesInRange(dateRange.startDate, dateRange.endDate);

  const {
    data: professional,
    isLoading,
    isError,
    error,
  } = useFetchProfessional<ProfessionalType>('f67f4224-b0a1-4b55-9d15-4e48f933fd47');

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <ContainerStyled>
      {professional && (
        <>
          <ProfileContainer>
            <ProfileInfo {...professional} />
          </ProfileContainer>
          <CalendarContainer>
            <Calendar
              professionalId={professional.id}
              dateRange={dateRange}
              changeDateRange={changeDateRange}
              datesToShow={datesToShow}
            />
          </CalendarContainer>
        </>
      )}
    </ContainerStyled>
  );
};
