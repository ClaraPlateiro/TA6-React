import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <div>
      <h1>Lista</h1>
      <input
        type="text"
        value={task}
        placeholder="Agregar tarea"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Agregar tarea</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
          {task}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;