import taskbarStyles from '../../styles/Taskbar.module.css'
import Image from 'next/image'

interface TaskbarButtonProps {
  icon: string;
  title: string;
  windowState: { visible: boolean, zIndex: number, focused: boolean, active: boolean }
  cb: Function;
  id: number
}

function TaskbarButton({ icon, title, windowState, cb, id }: TaskbarButtonProps) {

  console.log(windowState.focused, title)

  const handleClick = () => {
    if (windowState.visible) {
      cb(id, windowState.focused ? 'minimize' : 'focus')
    } else {
      cb(id, 'show')
    }
  }

  return (
    <div className={windowState.focused ? taskbarStyles.taskbarButton + ' ' + taskbarStyles.taskbarButtonClicked : taskbarStyles.taskbarButton} onClick={handleClick}>
      <Image src={icon} alt="windowImg" width={15} height={15} />
      <p style={{ marginLeft: 5 }}>{title}</p>
    </div>
  )
}

export default TaskbarButton