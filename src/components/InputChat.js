import { useEffect, useState, Suspense, lazy, useCallback } from 'react'
import { connect, useDispatch } from 'react-redux';
import { createPost } from './../redux/actions';
import io from 'socket.io-client';
import { Spinner } from './Spinner';
const socket = io.connect('http://localhost:5000')



const ProfilePage = lazy(() => {
    const Picker = import('emoji-picker-react')
    return Picker
});
let a = ''




const InputChat = (/* { createPost } */) => {
    
    const [value, setValue] = useState({
        title: '',
        id: ''
    });
    const [showEmoji, setStatusEmoji] = useState(false)
    const styleTextarea = {};
    if (!value.title){
        styleTextarea.height = '45px'
    }
    let dispatch = useDispatch();
    
    useEffect(() => {
        
        const elems = document.querySelectorAll('.autocomplete');
        window.M.Autocomplete.init(elems);
        window.M.updateTextFields()
        const sendMessage = (data) => {
            console.log('!!!!!!!', data)
            setTimeout(() => {
                const q = document.querySelectorAll('.chat-wrapper__item')
                q[q.length - 1].scrollIntoView({ block: "center", behavior: "smooth" });
            })
            dispatch(createPost(data))
        }


        socket.on('login', sendMessage )
        console.log(socket.off)
        return () => socket.off('login', sendMessage )
        
    },[])



    const formHandler = (e) => {
        socket.emit('login', value)
        
        
        e.preventDefault();
        if (!value.title.trim()) {
            window.M.toast({ html: 'Напишите сообщение' })
            return
        }
        console.log(value)
        

        setValue({ title: '', id: '' });
        
    }


    const inputHandler = (e) => {
        setValue({ title: e.target.value, id: new Date().toLocaleTimeString() })
    }

    const onEmojiClick = (_, emojiObject) => {
        setValue({ title: value.title + emojiObject.emoji, id: new Date().toLocaleTimeString() })
        if (emojiObject.emoji) {
            document.querySelector('.input-field label').classList.add('active')
        }
    };

    const toggleEmoji = () => {
        setStatusEmoji(true)
        const emoji = document.querySelector('.emoji-block')
        emoji.classList.toggle('active-emoji')
        
        document.addEventListener('click', (e) => {
            const target = e.target
            if (!target.closest('.emoji-block') && target.tagName !== 'I') {
                emoji.classList.remove('active-emoji');
            }
        })
    }

    return (
        <form onSubmit={formHandler} className="row d-flex">
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s12" style={{ right: '13px', width: '94%' }}>
                        <i className="material-icons prefix" style={{ fontSize: '21px', top: '15px' }}>textsms</i>
                        <textarea 
                            autoComplete="off" 
                            onChange={inputHandler} 
                            value={value.title} 
                            type="text" 
                            id="textarea1" 
                            className="materialize-textarea"
                            style={styleTextarea}>
                        </textarea>
                        <label htmlFor="textarea1"> Сообщение </label>
                        <i onClick={toggleEmoji} className="material-icons prefix i-emoji pulse">insert_emoticon</i>
                    </div>
                </div>
            </div>
            <button className="btn waves-effect pink mt-btn" type="submit" name="action">Send
                <i className="material-icons center">email</i>
            </button>
            <div className='emoji-block'> 
                {showEmoji && <Suspense fallback={ <Spinner />}><ProfilePage onEmojiClick={onEmojiClick} /></Suspense>}
            </div>
        </form>
    )
}
const mapDispatchToProps = {
    createPost: createPost
}


export default connect(null, mapDispatchToProps)(InputChat);