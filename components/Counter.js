import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addHeight, addWidth } from '../redux/actions';
import { selectCount, selectHeight,selectWidth } from '../redux/selectors';
import { useState } from 'react';


export default function Counter({ name }) {
  const 
    count = useSelector(selectCount),
    height = useSelector(selectHeight),    
    width = useSelector(selectWidth),
    dispatch = useDispatch(),
    [my, setMy] = useState(500);
  console.log('рендер Counter ', name, count, Date.now());
  return <fieldset>
    <button onClick={() => dispatch(decrement())}> - </button>
    <span> &nbsp; {count} &nbsp; </span>
    <button onClick={() => dispatch(increment())}> + </button>
    &nbsp;
    <button onClick={() => dispatch(addHeight(~~(10*Math.random())))}> height : {height} </button>
    &nbsp;
    <button onClick={() => dispatch(addWidth(~~(10*Math.random())))}> width: {width} </button>
    <br/>
    state: <button onClick={_ => setMy(n => n + 1)}> &nbsp; {my} &nbsp; </button>
  </fieldset>;

}