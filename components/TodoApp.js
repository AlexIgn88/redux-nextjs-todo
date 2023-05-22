import Form from './Form';
import Lists from './Lists';
// import { useSelector } from 'react-redux';
// import { selectLists } from '../redux/selectors.js';

export default function TodoApp() {
  // const
  //   numberOfLists = useSelector(selectLists).length > 0;

  console.log('рендер TodoApp', Date.now());

  return <div className='todo'>
    <div className='heading'>Things to do</div>
    <Form />
    {/* {numberOfLists && <Lists />}  */}
    <Lists />
  </div>
}