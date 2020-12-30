import {connect} from 'react-redux'

const style = {
    li: {
        fontSize: '20px',
        marginLeft: '10px',
        color: '#FEFCEF'
    },
    ul: {
        padding: '15px'
        
    },
    div: {
        display: 'flex'
    }
}



const MainChat = ({postsChat}) => {
    

    return (
        
            <div className='chat-wrapper z-depth-3'>
                <ul style={style.ul}>
                    {postsChat.map( item => {
                        return (
                            <div className='chat-item' key={item.id}>
                                <div className='chat-wrapper__item'>
                                    
                                    <li style={style.li}>
                                        {item.title}
                                    </li>
                                    <div>
                                        <span>
                                            {item.id.toString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        
    )
}
const mapStateToProps = state => {
    return {
        postsChat: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(MainChat);