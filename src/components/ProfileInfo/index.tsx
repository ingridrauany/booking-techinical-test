import { ProfilePros } from 'src/types/Profile';
import { ProfileStars } from '../ProfileStars';
import {
  ProfileDescriptionStyled,
  ProfileInfoStyled,
  ProfileNameStyled,
  ProfilePictureContainerStyled,
  ProfilePriceStyled,
  ProfileProfessionStyled,
  ProfileStyled,
  ProfileTimeBoxStyled,
} from './styles';

export const Profile = ({
  name,
  profession,
  city,
  ratingAverage,
  price,
  timebox,
  description,
  profilePicture,
  totalOfReviews,
}: ProfilePros) => {
  return (
    <ProfileStyled>
      <ProfilePictureContainerStyled alt={name} src={`https://avatars.githubusercontent.com/${profilePicture}?v=4`} />
      <ProfileInfoStyled>
        <ProfileNameStyled>{name}</ProfileNameStyled>
        <ProfileProfessionStyled>
          {profession} | <span>{city}</span>
        </ProfileProfessionStyled>
        <ProfileStars ratingAverage={ratingAverage} totalOfReviews={totalOfReviews} />
        <ProfilePriceStyled>R${price}</ProfilePriceStyled>
        <ProfileTimeBoxStyled> / {timebox} minutes</ProfileTimeBoxStyled>
      </ProfileInfoStyled>
      <ProfileDescriptionStyled>{description}</ProfileDescriptionStyled>
    </ProfileStyled>
  );
};
