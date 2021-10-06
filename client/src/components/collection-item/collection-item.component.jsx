import React from 'react';

// Redux
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

// Components
import CustomButton from '../custom-button/custom-button.component';

// styles
import {
  CollectionFooter,
  CollectionItemContainer,
  CollectionName,
  CollectionPrice,
  CustomButtonContainer,
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
        <CollectionPrice>${price}</CollectionPrice>
      </CollectionFooter>
      <CustomButtonContainer>
        <CustomButton onClick={() => addItemToCart(item)} inverted>
          Add To Cart
        </CustomButton>
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
