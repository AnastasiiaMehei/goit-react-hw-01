// import clsx from "clsx";
import Profile from "../Profile/Profile";
import userData from "../../data/userData.json";
import FriendList from '../FriendList/FriendList'
import friends from '../../data/friends.json'

function App () {
    return (
      <>
        <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
        <FriendList friends={friends}/>
      </>
    );
  }
export default App
