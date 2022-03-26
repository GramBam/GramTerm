import Clock from './Clock'
import StartButton from './StartMenu/StartButton'
import taskbarStyles from '../../styles/Taskbar.module.css'
import StartMenu from './StartMenu/StartMenu'
import { useState } from 'react'

function Taskbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <StartMenu show={menuOpen} />
      <div className={taskbarStyles.taskbar}>
        <StartButton show={menuOpen} setShow={setMenuOpen} />
        <Clock />
      </div>
    </>

  )
}

export default Taskbar