import React from 'react';

import { 
  Container,
  Banner,
  Avatar, 
  ProfileData, 
  LocationIcon,
  CakeIcon,
  Fallowage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>


      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Daniel Fernandes</h1>
        <h2>@Daniel</h2>

        <p>
          Develper at <a href="%">@Rockeseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon/>
            DF-São Sebastião, Brasil
          </li>

          <li>
            <CakeIcon/>
            Nascido(a) em 5 de janeiro de 2004
          </li>
        </ul>


        <Fallowage>
          <span>
            seguindo <strong> 94 </strong>
          </span>

          <span>
            <strong>10 </strong> seguidores
          </span>
        </Fallowage>
      </ProfileData>

    </Container>
  );
}

export default ProfilePage;