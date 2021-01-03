import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { createPost } from './../redux/actions';
import Picker from 'emoji-picker-react';


const InputChat = ({ createPost }) => {
    const [value, setValue] = useState({
        title: '',
        id: ''
    });
    useEffect(() => {
        const elems = document.querySelectorAll('.autocomplete');
        window.M.Autocomplete.init(elems);
    }, [])



    const formHandler = (e) => {
        e.preventDefault();
        if (!value.title.trim()) {
            window.M.toast({ html: 'Напишите сообщение' })
            return
        }
        createPost(value)
        setValue({ title: '', id: '' });
        setTimeout(() => {
            const q = document.querySelectorAll('.chat-wrapper__item')
            q[q.length - 1].scrollIntoView({ block: "center", behavior: "smooth" });
        })
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
                        <input  autoComplete="off" onChange={inputHandler} value={value.title} type="text" id="chat" className="validate"></input>
                        <label htmlFor="chat"> Сообщение </label>
                        <i onClick={toggleEmoji} className="material-icons prefix i-emoji pulse">insert_emoticon</i>
                    </div>
                </div>
            </div>
            <button className="btn waves-effect pink mt-btn" type="submit" name="action">Send
                <i className="material-icons center">email</i>
            </button>
            <div className='emoji-block'>
                <Picker onEmojiClick={onEmojiClick} />
            </div>
        </form>
    )
}
const mapDispatchToProps = {
    createPost: createPost
}


export default connect(null, mapDispatchToProps)(InputChat);