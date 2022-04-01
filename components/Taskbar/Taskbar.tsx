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
        <div className={taskbarStyles.taskbarButtons}>
          <TaskbarButton icon='/assets/images/myComputer.png' title={'My Computer'} clicked={true} />
          <TaskbarButton icon='/assets/images/resume.png' title={'Resume'} clicked={false} />
        </div>
        <Clock />
      </div>
      <StartMenu show={menuVisible} />
    </>
  )
}

export default Taskbar