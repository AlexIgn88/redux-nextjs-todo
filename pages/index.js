import TodoApp from '../components/TodoApp.js';

export default function Home() {

  console.log('рендер Home', Date.now());

  return <TodoApp />
}