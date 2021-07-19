import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import {
  CollectionFooter,
  CollectionItemContainer,
  CollectionName,
  CollectionPrice,
  ImageContainer,
} from './collection-item.styles';

// eslint-disable-next-line no-shadow
const CollectionItem = ({ item, addItemToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <CollectionName>{name}</CollectionName>
        <CollectionPrice>{price}</CollectionPrice>
      </CollectionFooter>
      <CustomButton onClick={() => addItemToCart(item)} inverted>
        Add To Cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
