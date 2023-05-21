import { useState } from 'react';
import { addList, delCheckedLists } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function Form() {
    const
        [text, setText] = useState(''),
        dispatch = useDispatch();

    console.log('рендер Form', Date.now());

    return <div className='form'>
        <input
            type="search"
            value={text}
            onInput={(evt) => setText(evt.target.value)}
        />
        <button onClick={() => {
            dispatch(addList(text));
            setText("");
        }}>
            Add
        </button>
        <button
            onClick={() => dispatch(delCheckedLists())}>
            Delete checked
        </button>
    </div>
}