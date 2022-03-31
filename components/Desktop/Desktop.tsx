import Shortcut from "./Shortcut"
import desktopStyles from '../../styles/Desktop.module.css'
import Taskbar from "../Taskbar/Taskbar"
import Window from "./Window/Window"
import { useState } from "react"

function Desktop() {
  const [menuVisible, setMenuVisible] = useState(false)

  const pages: { img: string, title: string }[] = [
    { img: '/assets/images/mycomputer.png', title: "My Computer" },
    { img: '/assets/images/resume.png', title: "Resume" },
    { img: '/assets/images/projects.png', title: "Projects" },
    { img: '/assets/images/lnf.png', title: "Languages & Frameworks" },
    { img: '/assets/images/tools.png', title: "Tools" },
    { img: '/assets/images/mail.png', title: "Mail" },
  ]

  const windows = pages.map((page, i) => {
    return <Window icon={page.img} title={page.title} key={i} />
  })
  const shortcuts = pages.map((page, i) => {
    return <Shortcut img={page.img} title={page.title} key={i} />
  })


  return (
    <>
      <div className={desktopStyles.main} onClick={() => setMenuVisible(false)}>
        {windows[1]}
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