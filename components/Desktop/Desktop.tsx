import Shortcut from "./Shortcut"
import myComputer from '../../assets/mycomputer.png'
import resume from '../../assets/resume.png'
import projects from '../../assets/projects.png'
import desktopStyles from '../../styles/Desktop.module.css'
import Taskbar from "../Taskbar/Taskbar"

function Desktop() {

  return (
    <div className={desktopStyles.desktop}>
      <div className={desktopStyles.shortcuts}>
        <Shortcut img={myComputer} title="My Computer" />
        <Shortcut img={resume} title="Resume" />
        <Shortcut img={projects} title="Projects" />
      </div>
      <Taskbar />
    </div>
  )
}

export default Desktop