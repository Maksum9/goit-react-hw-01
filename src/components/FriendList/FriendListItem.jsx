import React from 'react';
import styles from './FriendList.module.css'; // Ensure correct import

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friends__item}>
      <span className={`${styles.friends__status} ${styles[isOnline]}`}>
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} />
      <p className={styles.friends__name}>{name}</p>
    </li>
  );
};

export default FriendListItem;