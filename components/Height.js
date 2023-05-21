import { useSelector, useDispatch } from 'react-redux';
import { addHeight } from '../redux/actions';
import { selectHeight } from '../redux/selectors';
import { useState } from 'react';


export default function Height() {
  const
    height = useSelector(selectHeight),
    dispatch = useDispatch(),
    [my, setMy] = useState(500);
  console.log('рендер Height', height, Date.now());
  return <fieldset>
    <button onClick={() => dispatch(addHeight(~~(10 * Math.random())))}> height : {height} </button>
    <br />

    state: <button onClick={_ => setMy(n => n + 1)}> &nbsp; {my} &nbsp; </button>
  </fieldset>;

}