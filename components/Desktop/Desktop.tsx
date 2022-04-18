import Shortcut from "./Shortcut"
import desktopStyles from '../../styles/Desktop.module.css'
import Taskbar from "../Taskbar/Taskbar"
import Window from "../Windows/Window"
import { useState } from "react"
import { windows } from "../../data/WindowData"

function Desktop() {

  const [menuVisible, setMenuVisible] = useState(false)
  const [windowState, setWindowsState] = useState(Array.from({ length: windows.length }, () => ({
    visible: false, zIndex: 5, focused: false, active: false
  })))

  const toggleWindow = (i: number, action: 'show' | 'hide' | 'minimize' | 'focus') => {
    let arr = [...windowState]

    switch (action) {
      case 'show': arr[i].visible = true; arr[i].zIndex = getHighestZIndex() + 1; arr[i].active = true; break;
      case 'hide': arr[i].visible = false; arr[i].active = false; arr[i].focused = false; break;
      case 'minimize': arr[i].visible = false; arr[i].focused = false; break;
      case 'focus': arr[i].zIndex = getHighestZIndex() + 1; break;
    }

    //If you close a window while other windows are open, find one and set it to focused
    for (let j = 0; j < arr.length; j++) {
      if ((action === 'hide' || action === 'minimize') && arr[j].visible) {
        arr[j].focused = true
        break;
      } else {
        arr[j].focused = j === i
      }
    }

    setWindowsState(arr)
  }

  const getHighestZIndex = (): number => {
    let x = 0;
    for (let i = 0; i < windowState.length; i++) {
      if (windowState[i].zIndex > x) {
        x = windowState[i].zIndex
      }
    }
    return x
  }

  const getWindows = () => {
    return [...Array(windows.length)].map((_, i) => (
      windowState[i].visible &&
      <Window
        id={i}
        title={windows[i].title}
        icon={windows[i].img}
        key={i}
        cb={toggleWindow}
        zIndex={windowState[i].zIndex}
        focused={windowState[i].focused}
      />
    ))
  }

  const shortcuts = windows.map((window, i) => {
    return <Shortcut img={window.img} title={window.title} key={i} id={i} cb={toggleWindow} />
  })

  return (
    <>
      <div className={desktopStyles.main} onClick={() => setMenuVisible(false)}>
        {getWindows()}
        <div className={desktopStyles.desktop}>
          <div className={desktopStyles.shortcuts}>
            {shortcuts}
          </div>
        </div>
      </div>
      <Taskbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} windowState={windowState} windowStateCB={toggleWindow} />
    </>
  )
}

export default Desktop