import { FaStar } from 'react-icons/fa';
import { ProfileStarsStyled } from './styles';

export const ProfileStars = ({ ratingAverage, totalOfReviews }: { ratingAverage: number; totalOfReviews: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar key={index} color={index < ratingAverage ? '#ffc107' : '#e4e5e9'} />
  ));

  return (
    <ProfileStarsStyled>
      {stars} <span>({totalOfReviews} reviews)</span>
    </ProfileStarsStyled>
  );
};
