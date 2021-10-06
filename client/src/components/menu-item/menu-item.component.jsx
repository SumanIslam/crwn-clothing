import React from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import {
  ContentConatiner,
  ImageContainer,
  MenuItemContainer,
  SubTitleConatiner,
  TitleConatiner,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
    <ContentConatiner>
      <TitleConatiner>{title}</TitleConatiner>
      <SubTitleConatiner>Shop Now</SubTitleConatiner>
    </ContentConatiner>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
