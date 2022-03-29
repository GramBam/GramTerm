import Shortcut from "./Shortcut"
import myComputer from '../../public/assets/images/mycomputer.png'
import resume from '../../public/assets/images/resume.png'
import projects from '../../public/assets/images/projects.png'
import tools from '../../public/assets/images/tools.png'
import mail from '../../public/assets/images/mail.png'
import lnf from '../../public/assets/images/lnf.png'
import desktopStyles from '../../styles/Desktop.module.css'
import Taskbar from "../Taskbar/Taskbar"
import Window from "./Window/Window"
import { useState } from "react"

function Desktop() {
  const [menuVisible, setMenuVisible] = useState(false)
  const pages: { img: StaticImageData, title: string }[] = [
    { img: myComputer, title: "My Computer" },
    { img: resume, title: "Resume" },
    { img: projects, title: "Projects" },
    { img: lnf, title: "Languages & Frameworks" },
    { img: tools, title: "Tools" },
    { img: mail, title: "Mail" },
  ]

  return (
    <>
      <div className={desktopStyles.main} onClick={() => setMenuVisible(false)}>
        <Window img={resume} title="Resume" />
        <div className={desktopStyles.desktop}>
          <div className={desktopStyles.shortcuts}>
            {[...Array(pages.length)].map((_, i) => <Shortcut img={pages[i].img} key={i} title={pages[i].title} />)}
          </div>
        </div>
      </div>
      <Taskbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
    </>


  )
}

export default Desktop