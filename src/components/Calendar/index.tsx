import { CalendarHeaderDate, CalendarTimeButton, Error, LoadingOverlay } from '@components/index';
import { CalendarType } from '@customTypes/Calendar';
import { DateRangeType } from '@customTypes/DateRange';
import { useFetchCalendar } from '@hooks/useFetchCalendar';
import { IconContext } from 'react-icons';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { CalendarButtonNextStyled, CalendarButtonPrevStyled, CalendarDateStyled, CalendarItemStyled } from './styles';

export const Calendar = ({
  professionalId,
  dateRange,
  changeDateRange,
  datesToShow,
}: {
  professionalId: string;
  dateRange: DateRangeType;
  changeDateRange: (action: string) => void;
  datesToShow: string[];
}) => {
  const {
    data: calendar,
    isLoading,
    isError,
    error,
  } = useFetchCalendar<CalendarType[]>(professionalId, dateRange.startDate, dateRange.endDate);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#e1e1eb' }}>
        <CalendarButtonPrevStyled
          onClick={() => changeDateRange('prev')}
          aria-label="Show previous day"
          title="Show previous day"
        >
          <FaArrowAltCircleLeft fontStyle={'e1e1eb'} />
        </CalendarButtonPrevStyled>
        <CalendarButtonNextStyled
          onClick={() => changeDateRange('next')}
          aria-label="Show next day"
          title="Show next day"
        >
          <FaArrowAltCircleRight />
        </CalendarButtonNextStyled>
      </IconContext.Provider>
      {datesToShow.map((date) => (
        <CalendarItemStyled key={date}>
          <CalendarDateStyled>
            <CalendarHeaderDate date={date} />
          </CalendarDateStyled>
          {calendar &&
            calendar
              .filter(({ date: currentDate }: { date: string }) => currentDate === date)
              .map(({ id, time }: { id: string; time: string }) => (
                <CalendarTimeButton
                  key={id}
                  time={time}
                  arialLabel={`Schedule an appointment at ${time}`}
                  title={`Schedule an appointment at ${time}`}
                />
              ))}
        </CalendarItemStyled>
      ))}
    </>
  );
};
