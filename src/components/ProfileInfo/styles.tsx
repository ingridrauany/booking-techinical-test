import { styled } from 'styled-components';

export const ProfileStyled = styled.div`
  display: grid;
  grid-template-areas:
    'photo info'
    'description description';
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
`;

export const ProfileNameStyled = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ProfilePriceStyled = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ProfilePictureContainer = styled.img`
  grid-area: photo;
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;

  img {
    width: 100%;
  }
`;

export const ProfileTimeBoxStyled = styled.span``;

export const ProfileProfessionStyled = styled.div``;

export const ProfileDescriptionStyled = styled.div`
  grid-area: description;
`;

export const ProfileInfoStyled = styled.div`
  grid-area: info;
`;
