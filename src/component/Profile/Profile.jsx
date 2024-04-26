// import css from '../Profile/Profile.module.css'
export const Profile = (props) => {
    return (<div>
        <div> <img src={props.image}/>
         <p>Name: {props.username}</p>
         <p>Tag: {props.tag}</p>
         <p>Location: {props.location}</p></div>
         <ul>
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
