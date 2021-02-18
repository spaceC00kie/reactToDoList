import { useState } from "react"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [burrito, setBurrito] = useState([
    {
      id: 1,
      text: "Early meeting",
      day: "March 5 at 8am",
      reminder: true,
    },
    {
      id: 2,
      text: "Weekly grocery shopping",
      day: "March 8 at 6pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Take dog to park",
      day: "March 9 at 7pm",
      reminder: false,
    },
  ])

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setBurrito([...burrito, newTask])
  }

  //delete task
  const deleteTask = (id) => {
    setBurrito(burrito.filter((task) => task.id !==id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setBurrito(
      burrito.map((task) => 
      task.id === id ? { ...task, reminder:
      !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {burrito.length > 0 ? (
        <Tasks spoons={burrito} onDelete=
        {deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks - Relax!'
      )}
    </div>
  )
}

export default App
