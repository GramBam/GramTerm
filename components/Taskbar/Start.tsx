import Image from 'next/image'
import { useEffect, useState } from 'react'
import taskbarStyles from '../../styles/Taskbar.module.css'
import logo from '../../assets/logo.png'

function Start() {
  return (
    <div className={taskbarStyles.startButton}>
      <Image className={taskbarStyles.speakerImg} src={logo} alt="Speaker" height={15} width={15} />
      <p>Start</p>
    </div>
  )
}

export default Start