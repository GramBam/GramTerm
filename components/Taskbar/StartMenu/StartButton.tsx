import Image from 'next/image'
import startmenuStyles from '../../../styles/Startmenu.module.css'
import logo from '../../../assets/logo.png'
import { SyntheticEvent } from 'react';

export interface StartButtonProps {
  menuVisible: boolean
  setMenuVisible: Function
}

function StartButton({ menuVisible, setMenuVisible }: StartButtonProps) {

  const onStartClick = (e: SyntheticEvent) => {
    setMenuVisible(!menuVisible)
  }

  const getButtonClass = (): string => {
    return menuVisible ? startmenuStyles.startButton + ' ' + startmenuStyles.clicked : startmenuStyles.startButton
  }

  return (
    <div className={getButtonClass()} onClick={onStartClick}>
      <Image className={startmenuStyles.speakerImg} src={logo} alt="WinLogo" height={18} width={18} />
      <p>Start</p>
    </div>
  )
}

export default StartButton