import Clock from './Clock'
import StartButton from './StartButton'
import taskbarStyles from '../../styles/Taskbar.module.css'

function Taskbar() {
  return (
    <div className={taskbarStyles.taskbar}>
      <StartButton />
      <Clock />
    </div>
  )
}

export default Taskbar