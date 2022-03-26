import Image from 'next/image'
import startmenuStyles from '../../../styles/Startmenu.module.css'
import logo from '../../../assets/logo.png'
import { SyntheticEvent } from 'react';

interface StartButtonProps {
  show: boolean
  setShow: Function
}

function StartButton({ show, setShow }: StartButtonProps) {

  const onStartClick = (e: SyntheticEvent) => {
    setShow(!show)
  }

  const getButtonClass = (): string => {
    return show ? startmenuStyles.startButton + ' ' + startmenuStyles.clicked : startmenuStyles.startButton
  }

  return (
    <div className={getButtonClass()} onClick={onStartClick}>
      <Image className={startmenuStyles.speakerImg} src={logo} alt="WinLogo" height={18} width={18} />
      <p>Start</p>
    </div>
  )
}

export default StartButton