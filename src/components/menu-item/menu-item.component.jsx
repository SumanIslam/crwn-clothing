import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <div
    className={`${size} menu-item`}
    role="button"
    tabIndex="0"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
