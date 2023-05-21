import { useState } from 'react';
import { addList, delCheckedLists } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function Form() {
    const
        [text, setText] = useState(''),
        dispatch = useDispatch();

    return <div className='form'>
        <h4>Things to do</h4>
        <input
            type="search"
            value={text}
            onInput={(evt) => setText(evt.target.value)}
        />
        <button onClick={() => {
            dispatch(addList(text));
            setText("");
        }}>Add</button>
        <button
            onClick={() => dispatch(delCheckedLists())}>Delete checked</button>
    </div>
}