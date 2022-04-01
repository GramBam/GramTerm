import taskbarStyles from '../../styles/Taskbar.module.css'
import Image from 'next/image'
import { ShortcutProps } from '../Desktop/Shortcut'

function TaskbarButton({ img, title }: ShortcutProps) {
  return (
    <div className={taskbarStyles.taskbarButton + ' ' + taskbarStyles.taskbarButtonClicked}>
      <Image src={img} alt="windowImg" width={15} height={15} />
      <p style={{ marginLeft: 5 }}>{title}</p>
    </div>
  )
}

export default TaskbarButton