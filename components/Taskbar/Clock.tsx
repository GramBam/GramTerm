import speakerIcon from '../../assets/speakers.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import taskbarStyles from '../../styles/Taskbar.module.css'

function Clock() {

  const getTime = (): string => {
    let currentTime: string = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    if (currentTime[0] === '0') {
      currentTime = currentTime.substring(1)
    }

    return currentTime
  }

  const [time, setTime] = useState(getTime)

  useEffect(() => {
    const timer: NodeJS.Timer = setInterval(() => {
      setTime(getTime)
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div className={taskbarStyles.clockContainer}>
      <Image className={taskbarStyles.speakerImg} src={speakerIcon} alt="Speaker" height={15} width={15} />
      <p className={taskbarStyles.time}>{time}</p>
    </div>
  )
}

export default Clock