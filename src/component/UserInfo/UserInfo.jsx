import css from './UserInfo.module.css'
export default function UserInfo (user: {name, tag, location,image, stats}){
    return (<div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p>Petra Marica</p>
        <p>@pmarica</p>
        <p>Salvador, Brasil</p>
    </div>);
};
