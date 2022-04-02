import Clock from './Clock'
import StartButton from './StartMenu/StartButton'
import taskbarStyles from '../../styles/Taskbar.module.css'
import StartMenu from './StartMenu/StartMenu'
import TaskbarButton from './TaskbarButton'
import { pages } from '../../data/PageData'

interface TaskbarProps {
  menuVisible: boolean;
  setMenuVisible: Function;
  windowState: { visible: boolean, zIndex: number, focused: boolean }[]
  windowStateCB: Function;
}

function Taskbar({ menuVisible, setMenuVisible, windowState, windowStateCB }: TaskbarProps) {

  const getButtons = () => {
    return [...Array(windowState.length)].map((_, i) => (
      windowState[i].visible &&
      <TaskbarButton
        icon={pages[i].img}
        title={pages[i].title}
        clicked={windowState[i].focused}
        cb={windowStateCB}
        key={i}
        id={i}
      />
    ))
  }

  return (
    <>
      <div className={taskbarStyles.taskbar}>
        <StartButton menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
        <div className={taskbarStyles.taskbarButtons}>
          {getButtons()}
        </div>
        <Clock />
      </div>
      <StartMenu show={menuVisible} />
    </>
  )
}

export default Taskbar