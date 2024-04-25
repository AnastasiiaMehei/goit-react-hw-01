import Profile from "../Profile/Profile";
import userData from "../../data/userData.json";
import FriendList from '../FriendList/FriendList'
import friends from '../../data/Friends.json'

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
        <FriendList friends={friends}/>
      </>
    );
  };
export default App
