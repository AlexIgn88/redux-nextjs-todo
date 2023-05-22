import Form from './Form';
import Lists from './Lists';

export default function TodoApp() {

  console.log('рендер TodoApp', Date.now());

  return <div className='todo'>
    <div className='heading'>Things to do</div>
    <Form />
    <Lists />
  </div>
}