import Profile from './Profile/Profile';
import FriendList from './Friends/FriendList'; 
import TransactionHistory from './TransactionHistory/TransactionHistory';
import userData from '../json/userData.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;