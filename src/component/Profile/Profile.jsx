import css from '../Profile/Profile.module.css'
const Profile = (props) => {
    return (<div className={css.profileContainer}>
        <div className={css.profile}> <img className={css.profileImage} src={props.image}/>
         <p className={css.username}>{props.username}</p>
         <p className={css.userInfo}>@{props.tag}</p>
         <p className={css.userInfo}>{props.location}</p></div>
         <ul className={css.list}>
     <li>
       <span>Followers</span>
       <span>{props.stats.followers}</span>
     </li>
     <li>
       <span>Views</span>
       <span>{props.stats.views}</span>
     </li>
     <li>
       <span>Likes</span>
       <span>{props.stats.likes}</span>
     </li>
   </ul>
 
     </div>);
}
export default Profile