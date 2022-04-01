import Clock from './Clock'
import StartButton, { StartButtonProps } from './StartMenu/StartButton'
import taskbarStyles from '../../styles/Taskbar.module.css'
import StartMenu from './StartMenu/StartMenu'
import TaskbarButton from './TaskbarButton'

function Taskbar({ menuVisible, setMenuVisible }: StartButtonProps) {
  return (
    <>
      <div className={taskbarStyles.taskbar}>
        <StartButton menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
        <TaskbarButton img='/assets/images/myComputer.png' title={'My Computer'} />
        <TaskbarButton img='/assets/images/resume.png' title={'Resume'} />
        <Clock />
      </div>
      <StartMenu show={menuVisible} />
    </>
  )
}

export default Taskbar