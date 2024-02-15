import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.friends__item} key={id}>
      <span className={`${styles.friends__status} ${styles[isOnline]}`}>
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} />
      <p className={styles.friends__name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;