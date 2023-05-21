import { useSelector } from 'react-redux';
import { selectLists } from '../redux/selectors';
import { checkList, delList, movelistUp, movelistDown } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function Lists() {
    const
        lists = useSelector(selectLists),
        dispatch = useDispatch();

    // console.log(lists);

    return <ol className='lists'>
        {lists.map((el, index) => (
            <li
                data-id={el.id}
                key={el.id}
            >
                <label className="label">
                    <input type="checkbox"
                        checked={el.checked}
                        onChange={
                            (evt) =>
                                dispatch(checkList(+evt.target.closest("Li").dataset.id))
                        } />
                    {el.str}
                </label>
                <span
                    className="cross"
                    onClick={
                        (evt) =>
                            dispatch(delList(+evt.target.closest("Li").dataset.id))
                    }>
                    &#10007;
                </span>
                <span className="arrow up"
                    onClick={() =>
                        dispatch(movelistUp(el.id))
                    }
                >
                    {" "}&#8657;{" "}
                </span>
                <span className="arrow down"
                    onClick={() =>
                        dispatch(movelistDown(el.id))
                    }
                >
                    {" "}&#8659;{" "}
                </span>
            </li>
        ))}
    </ol>
}