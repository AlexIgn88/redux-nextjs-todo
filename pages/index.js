import Head from 'next/head';
import TodoApp from '../components/TodoApp.js';

export default function Home() {

  // console.log('рендер Home', Date.now());

  return <>
    <Head>
      <title>Todo-list на Next.js и Redux</title>
    </Head>
    <TodoApp />
  </>
}