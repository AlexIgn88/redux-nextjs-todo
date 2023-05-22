import { useState } from 'react';
import { addList, delCheckedLists, delAllLists } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function Form() {
    const
        [text, setText] = useState(''),
        dispatch = useDispatch();

    const handleOnKeyDown = (evt) => {
        if (evt.keyCode === 13) {
            evt.preventDefault();
            dispatch(addList(text));
            // setText(""); //если включу, будет дополнительный рендеринг <Form /> при создании листов
        }
    };

    console.log('рендер Form', Date.now());

    return <div className='form'>
        <input
            type="search"
            placeholder="Write here"
            value={text}
            onInput={(evt) => setText(evt.target.value)}
            onKeyDown={(evt) => handleOnKeyDown(evt)}
        />
        <button onClick={() => {
            dispatch(addList(text));
            // setText(""); //если включу, будет дополнительный рендеринг <Form /> при создании листов
        }}>
            Add
        </button>
        <button
            onClick={() => dispatch(delCheckedLists())}>
            Delete checked
        </button>
        <button
        onClick={() => dispatch(delAllLists())}>
            Delete all
        </button>
    </div>
}