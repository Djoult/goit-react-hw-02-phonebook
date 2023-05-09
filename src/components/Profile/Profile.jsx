import shortid from 'shortid';
import css from './Profile.module.css';
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div>
        <img src={avatar} className={css.avatar} alt="User avatar" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        {Object.keys(stats).map(stat => {
          return (
            <li key={shortid.generate()} className={shortid.generate()}>
              <span>{stat}</span>
              <span>{stats[stat]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    text: PropTypes.number.isRequired,
  }),
};
export default Profile;
