import Image from 'next/image'
import startmenuStyles from '../../styles/Startmenu.module.css'
import logo from '../../assets/logo.png'

function StartButton() {
  return (
    <div className={startmenuStyles.startButton}>
      <Image className={startmenuStyles.speakerImg} src={logo} alt="WinLogo" height={18} width={18} />
      <p>Start</p>
    </div>
  )
}

export default StartButton