import { User } from 'src/types/User';
import {
  ProfileDescriptionStyled,
  ProfileInfoStyled,
  ProfileNameStyled,
  ProfilePictureContainer,
  ProfilePriceStyled,
  ProfileProfessionStyled,
  ProfileStyled,
  ProfileTimeBoxStyled,
} from './styles';

export const Profile = ({ name, profession, city, reviews, price, timebox, description, profilePicture }: User) => {
  return (
    <ProfileStyled>
      <ProfilePictureContainer alt={name} src={`https://avatars.githubusercontent.com/${profilePicture}?v=4`} />
      <ProfileInfoStyled>
        <ProfileNameStyled>{name}</ProfileNameStyled>
        <ProfileProfessionStyled>{profession}</ProfileProfessionStyled>
        <ProfilePriceStyled>R${price}</ProfilePriceStyled>
        <ProfileTimeBoxStyled>{timebox} minutes</ProfileTimeBoxStyled>
      </ProfileInfoStyled>
      <ProfileDescriptionStyled>{description}</ProfileDescriptionStyled>
    </ProfileStyled>
  );
};
