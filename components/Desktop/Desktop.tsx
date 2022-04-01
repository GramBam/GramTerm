import Shortcut from "./Shortcut"
import desktopStyles from '../../styles/Desktop.module.css'
import Taskbar from "../Taskbar/Taskbar"
import Window from "../Windows/Window"
import { useState } from "react"
import { pages } from "../../data/PageData"

function Desktop() {
  const [menuVisible, setMenuVisible] = useState(false)
  const [windowState, setWindowsState] = useState([
    { visible: false, zIndex: 5 },
    { visible: false, zIndex: 5 },
    { visible: false, zIndex: 5 },
    { visible: false, zIndex: 5 },
    { visible: false, zIndex: 5 },
    { visible: false, zIndex: 5 }
  ])

  const toggleWindow = (i: number, action: 'show' | 'hide' | 'toggle' | 'focused') => {
    let arr = [...windowState]

    switch (action) {
      case 'show': arr[i].visible = true; arr[i].zIndex = getHighestZIndex() + 1; break;
      case 'hide': arr[i].visible = false; break;
      case 'toggle': arr[i].visible = !arr[i].visible; break;
      case 'focused': arr[i].zIndex = getHighestZIndex() + 1; break;
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
    return [...Array(pages.length)].map((_, i) => (
      windowState[i].visible &&
      <Window
        id={i}
        title={pages[i].title}
        icon={pages[i].img}
        key={i}
        cb={toggleWindow}
        zIndex={windowState[i].zIndex}
      />
    ))
  }

  const shortcuts = pages.map((page, i) => {
    return <Shortcut img={page.img} title={page.title} key={i} id={i} cb={toggleWindow} />
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
      <Taskbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
    </>
  )
}

export default Desktop