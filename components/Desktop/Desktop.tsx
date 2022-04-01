import Shortcut from "./Shortcut"
import desktopStyles from '../../styles/Desktop.module.css'
import Taskbar from "../Taskbar/Taskbar"
import Window from "../Windows/Window"
import { useState, useReducer, useEffect } from "react"
import { pages } from "../../data/PageData"

function Desktop() {
  const [menuVisible, setMenuVisible] = useState(false)
  const [windowsVisible, setWindowsVisible] = useState([false, false, false, false, false, false])

  const toggleWindow = (i: number, action: 'show' | 'hide' | 'toggle') => {
    let arr = [...windowsVisible]

    switch (action) {
      case 'show': arr[i] = true; break;
      case 'hide': arr[i] = false; break;
      case 'toggle': arr[i] = !arr[i]; break;
    }

    setWindowsVisible(arr)
  }

  const getWindows = () => {
    return [...Array(pages.length)].map((_, i) => (
      windowsVisible[i] && <Window id={i} title={pages[i].title} icon={pages[i].img} key={i} cb={toggleWindow} zIndex={5} />
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