import Shortcut from "./Shortcut"
import myComputer from '../../assets/mycomputer.png'
import resume from '../../assets/resume.png'
import projects from '../../assets/projects.png'
import tools from '../../assets/tools.png'
import mail from '../../assets/mail.png'
import lnf from '../../assets/lnf.png'
import desktopStyles from '../../styles/Desktop.module.css'
import Taskbar from "../Taskbar/Taskbar"
import { SyntheticEvent, useState } from "react"

function Desktop() {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <div className={desktopStyles.main}>
      <div className={desktopStyles.desktop} onClick={() => setMenuVisible(false)}>
        <div className={desktopStyles.shortcuts}>
          <Shortcut img={myComputer} title="My Computer" />
          <Shortcut img={resume} title="Resume" />
          <Shortcut img={projects} title="Projects" />
          <Shortcut img={lnf} title="Languages & Frameworks" />
          <Shortcut img={tools} title="Tools" />
          <Shortcut img={mail} title="Mail" />
        </div>
      </div>
      <Taskbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
    </div>

  )
}

export default Desktop