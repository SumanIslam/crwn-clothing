import React from 'react';

// Collections
import CollectionItem from '../collection-item/collection-item.component';

// Styles
import { Preview, PreviewContainer, PreviewTitle } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <PreviewContainer>
    <PreviewTitle to={`shop/${title.toLowerCase()}`}>{title}</PreviewTitle>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </PreviewContainer>
);

export default CollectionPreview;
