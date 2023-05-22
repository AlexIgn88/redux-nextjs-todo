import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectLists } from '../redux/selectors';
import { checkList, delList, movelistUp, movelistDown, renameList } from '../redux/actions';

export default function Lists() {
    const
        lists = useSelector(selectLists),
        [rename, setRename] = useState(null),
        [text, setText] = useState(''),
        dispatch = useDispatch();

    const handleOnKeyDown = (evt, id) => {
        if (evt.keyCode === 13) {
            evt.preventDefault();
            dispatch(renameList(id, text));
            setText("");
            setRename(false);
        }
    };

    // console.log(lists);
    console.log('рендер Lists', Date.now());

    return <ol className='lists'>
        {lists.map((el, index) => (
            <li
                data-id={el.id}
                key={el.id}
            >
                <span
                    className="cross"
                    onClick={
                        (evt) =>
                            dispatch(delList(+evt.target.closest("Li").dataset.id))
                    }>
                    &#128465;
                </span>
                <span className="arrow up"
                    onClick={() =>
                        dispatch(movelistUp(el.id))
                    }
                >
                    &#11165;
                </span>
                <span className="arrow down"
                    onClick={() =>
                        dispatch(movelistDown(el.id))
                    }
                >
                    &#11167;
                </span>
                {rename === el.id
                    ? <input
                        type="search"
                        placeholder="Write here"
                        value={text}
                        onInput={(evt) => setText(evt.target.value)}
                        onKeyDown={(evt) => handleOnKeyDown(evt, el.id)}
                    />
                    : <span className="rename"
                        onClick={() => {
                            // dispatch(renameList(el.id))
                            setText(el.str);
                            setRename(el.id);
                        }
                        }
                    >
                        &#9997;
                    </span>}
                <label className={el.checked ? "label crossed-out" : "label"}>
                    <input type="checkbox"
                        checked={el.checked}
                        onChange={
                            (evt) =>
                                dispatch(checkList(+evt.target.closest("Li").dataset.id))
                        } />
                    {el.str}
                </label>
            </li>
        ))}
    </ol>
}