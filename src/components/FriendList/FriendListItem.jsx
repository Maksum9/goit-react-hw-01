import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friends__item}>
      <span className={`${styles.friends__status} ${isOnline ? styles.true : styles.false}`}>
        {isOnline ? 'Online' : 'Offline'}
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
};

export default FriendListItem;