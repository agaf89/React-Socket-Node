import {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { createPost } from './../redux/actions';


const InputChat = ({createPost}) => {
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
        if (value.title === ''){
            return
        }
        
        createPost(value)
        setValue({title: '', id: ''});
        
        setTimeout(()=> {
            const q = document.querySelectorAll('.chat-wrapper__item')
            q[q.length-1].scrollIntoView();
        })
    }


    return (
        <form onSubmit={formHandler} className="row d-flex">
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s12"  style={{right: '13px'}}>
                        <i className="material-icons prefix" style={{fontSize: '21px', top: '15px'}}>textsms</i>
                        <input onChange={e => setValue({ title: e.target.value, id: new Date().toLocaleTimeString()})} value={value.title} type="text" id="autocomplete-input" className="validate"></input>
                        <label htmlFor="autocomplete-input"> Сообщение </label>
                    </div>
                </div>
            </div>
            <button className="btn waves-effect pink mt-btn" type="submit" name="action">Send
                <i className="material-icons center">email</i>
            </button>
      </form>
    )
}
const mapDispatchToProps = {
    createPost: createPost
}


export default connect(null, mapDispatchToProps)(InputChat);