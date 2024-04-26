import css from '../Profile/Profile.module.css'
const Profile = (props) => {
    return (<div className={css.profileContainer}>
        <div className={css.profile}> <img className={css.profileImage} src={props.image}/>
         <p className={css.username}>{props.username}</p>
         <p className={css.userInfo}>@{props.tag}</p>
         <p className={css.userInfo}>{props.location}</p></div>
         <ul className={css.list}>
     <li className={css.listItem}>
       <span className={css.span}>Followers</span>
       <span className={css.spanProp}>{props.stats.followers}</span>
     </li>
     <li className={css.listItem}>
       <span className={css.span}>Views</span>
       <span className={css.spanProp}>{props.stats.views}</span>
     </li>
     <li className={css.listItem}>
       <span className={css.span}>Likes</span>
       <span className={css.spanProp}>{props.stats.likes}</span>
     </li>
   </ul>
 
     </div>);
}
export default Profile