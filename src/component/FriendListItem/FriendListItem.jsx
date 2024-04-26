import clsx from 'clsx'
import css from './FriendListItem.module.css'
export default function FriendListItem({friend:{avatar, name, isOnline}}){
    return(<div className={css.items}>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={clsx({
        [css.online]: isOnline,
        [css.offline]: !isOnline,
      })}>
        {isOnline ? "online" : "offline"}
      </p>
      </div>)
}