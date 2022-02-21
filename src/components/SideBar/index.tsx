import React from 'react';
import StikyBox from 'react-sticky-box'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'


const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StikyBox>

        <Body>

          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Daniel"
                nickname="@daniel_fer"
              />,

              <FollowSuggestion
                name="LukMoralers"
                nickname="@LukMoralers"
              />,

              <FollowSuggestion
                name="LukMoralers"
                nickname="@LukMoralers"
              />

            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />,


            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />,


            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />,


            ]}
          />

        </Body>
      </StikyBox>

    </Container>
  );
}

export default SideBar;
