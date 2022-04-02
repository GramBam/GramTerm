import taskbarStyles from '../../styles/Taskbar.module.css'
import Image from 'next/image'

interface TaskbarButtonProps {
  icon: string;
  title: string;
  clicked: boolean
  cb: Function;
  id: number
}

function TaskbarButton({ icon, title, clicked, cb, id }: TaskbarButtonProps) {

  const handleClick = () => {
    cb(id, clicked ? 'hide' : 'focus')
  }

  return (
    <div className={clicked ? taskbarStyles.taskbarButton + ' ' + taskbarStyles.taskbarButtonClicked : taskbarStyles.taskbarButton} onClick={handleClick}>
      <Image src={icon} alt="windowImg" width={15} height={15} />
      <p style={{ marginLeft: 5 }}>{title}</p>
    </div>
  )
}

export default TaskbarButton