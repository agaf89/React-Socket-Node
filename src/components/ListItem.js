import { useHistory } from 'react-router-dom'
export const ListItem = ({name, id}) => {
    console.log(name, id)
    const history = useHistory()
    const personChatHandler = () => {
        history.push(`/chat/ID/${id}`)
    }
    return (
        <li style={{cursor: 'pointer'}} onClick={personChatHandler} className="collection-item">
            <div>
                {name}
            </div>
            <i style={{color: 'rgb(41, 177, 185)', verticalAlign: 'middle' }} className="material-icons">send</i>
        </li>
    )
}