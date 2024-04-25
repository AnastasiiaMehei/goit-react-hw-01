import Profile from "../Profile/Profile";
import userData from "../../data/userData.json";
import FriendList from '../FriendList/FriendList'
import FriendListItem from "../FriendListItem/FriendListItem";

const App = () => {
    return (
      <>
        <Profile
   user={userData}
        />
        <FriendList friends={FriendListItem}/>
      </>
    );
  };
export default App
