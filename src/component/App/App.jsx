import Profile from "../Profile/Profile";
import userData from "../../data/userData.json";
import FriendList from '../FriendList/FriendList'
import FriendListItem from "../FriendListItem/FriendListItem";

const App = () => {
    return (
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={FriendListItem}/>
      </>
    );
  };
export default App
