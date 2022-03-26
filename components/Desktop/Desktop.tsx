import Shortcut from "./Shortcut"
import myComputer from '../../assets/mycomputer.png'
import resume from '../../assets/resume.png'
import desktopStyles from '../../styles/Desktop.module.css'
import StartMenu from "../Taskbar/StartMenu"

function Desktop() {
  return (
    <div className={desktopStyles.desktop}>
      <div className={desktopStyles.shortcuts}>
        <Shortcut img={myComputer} title="My Computer" />
        <Shortcut img={resume} title="Resume" />
      </div>
      <StartMenu />
    </div>
  )
}

export default Desktop