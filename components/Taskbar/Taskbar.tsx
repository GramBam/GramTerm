import Clock from './Clock'
import Start from './Start'
import taskbarStyles from '../../styles/Taskbar.module.css'

function Taskbar() {
  return (
    <div className={taskbarStyles.taskbar}>
      <Start />
      <Clock />
    </div>
  )
}

export default Taskbar