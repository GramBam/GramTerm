import Image from 'next/image'
import taskbarStyles from '../../styles/Taskbar.module.css'
import logo from '../../assets/logo.png'

function StartButton() {
  return (
    <div className={taskbarStyles.startButton}>
      <Image className={taskbarStyles.speakerImg} src={logo} alt="Speaker" height={15} width={15} />
      <p>Start</p>
    </div>
  )
}

export default StartButton