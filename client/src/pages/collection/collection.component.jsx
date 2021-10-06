import React from 'react';

// Redux
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';

// Components
import CollectionItem from '../../components/collection-item/collection-item.component';

// Styles
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
