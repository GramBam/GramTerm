import taskbarStyles from '../../styles/Taskbar.module.css'
import Image from 'next/image'

interface TaskbarButtonProps {
  icon: string;
  title: string;
  clicked: boolean
}

function TaskbarButton({ icon, title, clicked }: TaskbarButtonProps) {
  let className = clicked ? taskbarStyles.taskbarButton + ' ' + taskbarStyles.taskbarButtonClicked : taskbarStyles.taskbarButton
  return (
    <div className={className}>
      <Image src={icon} alt="windowImg" width={15} height={15} />
      <p style={{ marginLeft: 5 }}>{title}</p>
    </div>
  )
}

export default TaskbarButton