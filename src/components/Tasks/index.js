import './index.css'

const Tasks = props => {
  const {taskDetails} = props
  const {taskName, taskCategory} = taskDetails
  return (
    <li className="list-item">
      <p className="task-name">{taskName}</p>
      <p className="task-category">{taskCategory}</p>
    </li>
  )
}

export default Tasks
