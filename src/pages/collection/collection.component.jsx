import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collections }) => {
  // eslint-disable-next-line no-unused-vars
  const { title, items } = collections;
  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownprops) => ({
  collections: selectCollections(ownprops.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
