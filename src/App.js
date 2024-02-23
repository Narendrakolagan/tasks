import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import './App.css'
import Tasks from './components/Tasks'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    inputTask: '',
    selectTag: tagsList[0].optionId,
    myTaskList: [],
    activeTag: 'INITIAL',
  }

  onClickAddButton = () => {
    const {inputTask, selectTag} = this.state
    const taskName = inputTask
    const taskCategory = selectTag
    const id = uuid()

    if (taskName.length !== 0) {
      this.setState(prevState => ({
        myTaskList: [...prevState.myTaskList, {id, taskName, taskCategory}],
        inputTask: '',
        selectTag: tagsList[0].optionId,
      }))
    }
  }

  onChangeInputTask = event => {
    this.setState({inputTask: event.target.value})
    console.log(event.target.value)
  }

  onChangeSelectTag = event => {
    this.setState({selectTag: event.target.value})
    console.log(event.target.value)
  }

  onClickTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  render() {
    const {myTaskList, inputTask, selectTag} = this.state

    return (
      <div className="bg-container">
        <div className="create-container">
          <h1 className="task-heading">Create a task!</h1>
          <div className="input-container">
            <div className="text-input-container">
              <label htmlFor="textInput">Task</label>
              <input
                type="text"
                className="text-input"
                id="textInput"
                onChange={this.onChangeInputTask}
                value={inputTask}
              />
            </div>
            <div className="option-input-container">
              <label htmlFor="optionInput">Tags</label>
              <select
                id="optionInput"
                className="select-input"
                onChange={this.onChangeSelectTag}
                value={selectTag}
              >
                {tagsList.map(eachItem => (
                  <option>{eachItem.displayText}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="button"
            className="add-btn"
            onClick={this.onClickAddButton}
          >
            Add Task
          </button>
        </div>
        <div className="task-display-container">
          <div className="tags-container">
            <h1>Tags</h1>
            <ul className="list-items">
              {tagsList.map(eachItem => (
                <li className="list-item">
                  <button
                    type="button"
                    className="list-btn"
                    onClick={this.onClickTag}
                  >
                    {eachItem.displayText}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <h1>Tasks</h1>
          <div className="tasks-container">
            {myTaskList.length === 0 ? (
              <div className="no-tasks-container">
                <p className="no-task-text">No Tasks Added Yet</p>
              </div>
            ) : (
              <ul>
                {myTaskList.map(eachItem => (
                  <Tasks taskDetails={eachItem} key={eachItem.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
