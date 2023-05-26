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
            // setText(""); //если вкл, - дополнительный рендеринг <Form /> при создании листов
        }
    };

    console.log('test');

    console.log('рендер Form', Date.now());
    console.log('test2');

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
            // setText(""); //если вкл, - дополнительный рендеринг <Form /> при создании листов
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