import { ProfileStars } from '@components/ProfileStars';
import { ProfessionalType } from '@customTypes/Professional';
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

export const ProfileInfo = ({
  name,
  profession,
  city,
  ratingAverage,
  price,
  timebox,
  description,
  profilePicture,
  totalOfReviews,
}: ProfessionalType) => {
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
