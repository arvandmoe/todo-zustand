import { MouseEvent, useState } from 'react';
import reactLogo from '../../assets/react.svg';
import { useTodos } from '../../hooks/useTodos';
import './App.scss';

function App() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(10);
  const { todos, addTodo } = useTodos();

  const onAddNewTodo = (e: any) => {
    e.preventDefault();
    addTodo({ userId: 1, id: index, title: text, completed: false });
    setText('');
    setIndex(index + 1);
  };

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Todo App</h1>
      {todos.map((todo) => (
        <div className='todos-container' key={todo.id}>
          <p className='todo-item'>{todo.title}</p>
        </div>
      ))}
      <div className='card'>
        <form>
          <input
            id='addTodo'
            className='add-todo-input'
            autoComplete='off'
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button onClick={onAddNewTodo}>add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
