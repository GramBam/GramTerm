import Image from 'next/image';
import windowStyles from '../../styles/Window.module.css'
import { useState, MouseEvent } from 'react';
import Resume from './Resume';
import Languages from './Languages+Tools/Languages';
import Tools from './Languages+Tools/Tools';
import MyComputer from './MyComputer';
import Projects from './Projects';
import Mail from './Mail';

interface WindowProps {
  icon: string
  title: string
  id: number;
  cb: Function,
  zIndex: number,
  focused: boolean
}

function Window({ icon, title, id, cb, zIndex, focused }: WindowProps) {

  const getRandomStartPoint = (): { top: number, left: number } => {
    let top: number = Math.random() * (75 - 25 + 1) + 25
    let left: number = Math.random() * (125 - 75 + 1) + 75
    return { top, left }
  }

  const [dragState, setDragState] = useState({
    dragging: false,
    diffX: 0,
    diffY: 0,
    style: getRandomStartPoint()
  })

  let defaultWidth: string = '60vw'
  let defaultHeight: string = '50vh'

  if (typeof window !== "undefined") {
    defaultWidth = window.innerWidth > 650 ? '40vw' : '60vw'
    defaultHeight = window.innerWidth > 650 ? '70vh' : '50vh'
  }

  const [size, setSize] = useState({ full: false, width: defaultWidth, height: defaultHeight })



  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    focusWindow()

    let client = getClientPos(e)

    let target = e.target as HTMLElement
    if (target.id !== 'nav') {
      return
    }
    e.stopPropagation()
    setDragState((prevState) => ({
      diffX: client.x - target.getBoundingClientRect().left,
      diffY: client.y - target.getBoundingClientRect().top,
      dragging: true,
      style: prevState.style
    }))
  }

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()

    let client = getClientPos(e)

    if (dragState.dragging) {
      let style = { left: client.x - dragState.diffX, top: client.y - dragState.diffY }
      setDragState((prevState) => ({ ...prevState, style }))
    }
  }

  const handleMouseUp = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragState.dragging) {
      let parent = ((e.target as HTMLElement).parentElement as HTMLElement)
      let bounds = checkBounds(parent.getBoundingClientRect())

      let left: number = bounds.left
      let top: number = bounds.top
      setDragState((prevState) => ({ ...prevState, dragging: false, style: { left, top } }))
    }
  }

  const getClientPos = (e: React.MouseEvent | React.TouchEvent): { x: number, y: number } => {

    let isMobile: boolean = e.type === 'touchmove' || e.type === 'touchstart'

    return {
      x: isMobile ? (e as React.TouchEvent).touches[0].pageX : (e as React.MouseEvent).clientX,
      y: isMobile ? (e as React.TouchEvent).touches[0].pageY : (e as React.MouseEvent).clientY
    }
  }

  const checkBounds = (bounds: DOMRect | ClientRect): { left: number, top: number } => {
    let left: number = dragState.style.left
    let top: number = dragState.style.top

    if (left < 0) {
      left = 0
    } else if (left + bounds.width > screen.width) {
      left = screen.width - bounds.width
    }

    if (top < 0) {
      top = 0
    } else if (top + bounds.height > screen.height) {
      top = screen.height - bounds.height
    }

    return { left, top }
  }

  const hideWindow = (e: MouseEvent<HTMLButtonElement>) => {
    cb(id, (e.target as HTMLButtonElement).id)
  }

  const focusWindow = () => {
    cb(id, 'focus')
  }


  const resizeWindow = () => {
    if (size.full) {
      setDragState((prevState) => ({ ...prevState, style: getRandomStartPoint() }))
      setSize({ full: false, width: defaultWidth, height: defaultHeight })
    } else {
      setDragState((prevState) => ({ ...prevState, style: { left: 0, top: 0 } }))
      setSize({ full: true, width: '100vw', height: '96.25vh' })
    }
  }

  const getWindowContent = () => {
    switch (title) {
      case 'Resume': return <Resume />;
      case 'Languages': return <Languages />;
      case 'Tools': return <Tools />;
      case 'My Computer': return <MyComputer />;
      case 'Projects': return <Projects />;
      case 'Mail': return <Mail />;
    }
  }

  return (

    <>
      <div
        className={windowStyles.windowMain}
        style={{ top: dragState.style.top, left: dragState.style.left, width: size.width, height: size.height, zIndex }}
        onMouseDown={focusWindow}
      >
        <div
          className={windowStyles.windowNav}
          id={'nav'}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseOut={handleMouseUp}
          onTouchEnd={handleMouseUp}
          style={{ backgroundColor: focused ? '#00007c' : '#7b7d7b' }}
        >
          <div className={windowStyles.windowName}>
            <Image src={icon} alt="windowImg" width={15} height={15} className={windowStyles.windowImg} />
            <p>{title}</p>
          </div>
          <div className={windowStyles.windowButtons}>
            <button id="minimize" onClick={hideWindow}>-</button>
            <button id="resize" onClick={resizeWindow}><span>⠀</span></button>
            <button id="hide" onClick={hideWindow}>×</button>
          </div>
        </div>
        {getWindowContent()}
      </div>
    </>

  )
}

export default Window