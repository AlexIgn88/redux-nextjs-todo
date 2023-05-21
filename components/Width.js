import { useSelector, useDispatch } from 'react-redux';
import { addWidth } from '../redux/actions';
import { selectWidth } from '../redux/selectors';
import { useState } from 'react';


export default function Width() {
  const
    width = useSelector(selectWidth),
    dispatch = useDispatch(),
    [my, setMy] = useState(500);
  console.log('рендер Width ', width, Date.now());
  return <fieldset>
    <button onClick={() => dispatch(addWidth(~~(10 * Math.random())))}> width: {width} </button>
    <br />
    state: <button onClick={_ => setMy(n => n + 1)}> &nbsp; {my} &nbsp; </button>
  </fieldset>;

}