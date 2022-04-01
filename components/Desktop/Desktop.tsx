import Shortcut from "./Shortcut"
import desktopStyles from '../../styles/Desktop.module.css'
import Taskbar from "../Taskbar/Taskbar"
import Window from "../Window/Window"
import { useState, useReducer, useEffect } from "react"
import { pages } from "../../data/PageData"

const reducer = (state: any, action: any): [] => {
  console.log(state, action);

  return []
}

function Desktop() {
  const [menuVisible, setMenuVisible] = useState(false)
  const [windowsVisible, setWindowsVisible] = useState([false, false, false, false, false, false])

  const getWindows = () => {
    return [...Array(pages.length)].map((_, i) => (
      windowsVisible[i] && <Window id={i} title={pages[i].title} icon={pages[i].img} key={i} />
    ))
  }

  const shortcuts = pages.map((page, i) => {
    return <Shortcut img={page.img} title={page.title} key={i} />
  })

  const updateWindows = (i: number) => {
    let arr = Array.from(windowsVisible)
    console.log('b4', arr, windowsVisible);
    arr[i] = !arr[i]
    setWindowsVisible(arr)

    console.log('after', arr, windowsVisible);
  }

  const xd = () => {
    updateWindows(0)
    updateWindows(1)
  }

  return (
    <>
      <div className={desktopStyles.main} onClick={() => setMenuVisible(false)}>
        {
          [...Array(pages.length)].map((_, i) => (
            windowsVisible[i] && <Window id={i} title={pages[i].title} icon={pages[i].img} key={i} />
          ))
        }
        <div className={desktopStyles.desktop}>
          <div className={desktopStyles.shortcuts}>
            {shortcuts}
            <button onClick={() => xd()} style={{ width: 25, height: 25 }}></button>
          </div>
        </div>
      </div>
      <Taskbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
    </>
  )
}

export default Desktop