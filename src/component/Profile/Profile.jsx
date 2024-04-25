import css from '../Profile/Profile.module.css'
export default function Profile ({user: {name, tag, location,image},}){
    return (<div>
        <img src={image}/>
        <p>Name: {name}</p>
        <p>Tag: {tag}</p>
        <p>Location: {location}</p>
    </div>);
}
