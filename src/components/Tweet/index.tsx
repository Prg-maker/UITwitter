import React from 'react';

import {
  Container,
  Retweeted,
  RockeseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles'

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RockeseatIcon />
        Você retwetou

      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rockseat</strong>
            <span>Rockseat</span>
            <Dot />
            <time>27 de jun</time>

          </Header>


          <Description>
            Foguete não para de voar 🚀
          </Description>

          <ImageContent />


          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              18
            </Status>

            <Status>
              <LikeIcon />
              285
            </Status>
          </Icons>
        </Content>
      </Body>

    </Container>
  );
}

export default Tweet;
