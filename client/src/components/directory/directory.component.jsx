import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import selectDirectorySection from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});
export default connect(mapStateToProps)(Directory);
