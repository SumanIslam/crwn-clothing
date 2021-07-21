import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { CollectionPageContainer, ItemsContainer, TitleBlock } from './collection-styles';

const CollectionPage = ({ collections }) => {
  const { title, items } = collections;
  return (
    <CollectionPageContainer>
      <TitleBlock>{title}</TitleBlock>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownprops) => ({
  collections: selectCollections(ownprops.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
