import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

//https://www.youtube.com/watch?v=w7ejDZ8SWv8

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Work meeting',
        day: 'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}


// Delete task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id)) 
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder}: task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask()}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} />
     ):( 'No Tasks To Show')}

    </div>
  );
}

export default App;
