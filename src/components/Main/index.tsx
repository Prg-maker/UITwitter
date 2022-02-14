import React from 'react';
import ProfilePage from '../ProfilePage'

import { 
  Container,
  Header,
  BackIcon , 
  ProfileIcon ,
  BottomMenu ,
  HomeIcon ,
  SearchIcon,
  BellIcon,
  EmailIcon } from './styles';



const Main: React.FC = () => {
  return(
    <Container>
        <Header>
          <button>
            <BackIcon/>
          </button>

          <ProfileIcon>
            <strong>Daniel Fernandes</strong>
            <span>1 Tweets</span>
          </ProfileIcon>
        </Header>

         <ProfilePage/> 

        <BottomMenu>

          <HomeIcon className="active"/>
          <SearchIcon/>
          <BellIcon/>
          <EmailIcon/>

        </BottomMenu> 
    </Container>
  );
}

export default Main;