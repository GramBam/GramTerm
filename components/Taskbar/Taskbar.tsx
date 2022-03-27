import Clock from './Clock'
import StartButton, { StartButtonProps } from './StartMenu/StartButton'
import taskbarStyles from '../../styles/Taskbar.module.css'
import StartMenu from './StartMenu/StartMenu'
import { useState } from 'react'

function Taskbar({ menuVisible, setMenuVisible }: StartButtonProps) {

  return (
    <>
      <div className={taskbarStyles.taskbar}>
        <StartButton menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
        <Clock />
      </div>
      <StartMenu show={menuVisible} />
    </>

  )
}

export default Taskbar