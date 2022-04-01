import Image from 'next/image';
import windowStyles from '../../styles/Window.module.css'
import { useState, MouseEvent } from 'react';
import Resume from './Resume';
import Languages from './Languages+Tools/Languages';
import Tools from './Languages+Tools/Tools';

interface WindowProps {
  icon: string
  title: string
  id: number;
  cb: Function,
  zIndex: number
}

function Window({ icon, title, id, cb, zIndex }: WindowProps) {

  console.log(title, zIndex);

  const [dragState, setDragState] = useState({
    dragging: false,
    diffX: 0,
    diffY: 0,
    style: {
      top: 100,
      left: 200,
    }
  })

  const [size, setSize] = useState({ full: false, width: '50vw', height: '70vh' })

  const handleMouseDown = (e: MouseEvent) => {
    focusWindow()
    let target = e.target as HTMLElement
    if (target.id !== 'nav') {
      return
    }
    e.stopPropagation()
    setDragState((prevState) => ({
      diffX: e.clientX - target.getBoundingClientRect().left,
      diffY: e.clientY - target.getBoundingClientRect().top,
      dragging: true,
      style: prevState.style
    }))
  }

  const handleMouseMove = (e: MouseEvent) => {
    e.stopPropagation()
    if (dragState.dragging) {
      let style = { left: e.clientX - dragState.diffX, top: e.clientY - dragState.diffY }
      setDragState((prevState) => ({ ...prevState, style }))
    }
  }

  const handleMouseUp = (e: MouseEvent) => {
    if (dragState.dragging) {
      let parent = ((e.target as HTMLElement).parentElement as HTMLElement)
      let bounds = checkBounds(parent.getBoundingClientRect())

      let left: number = bounds.left
      let top: number = bounds.top
      setDragState((prevState) => ({ ...prevState, dragging: false, style: { left, top } }))
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

  const destroyWindow = () => {
    cb(id, 'hide')
  }

  const resizeWindow = () => {
    if (size.full) {
      setDragState((prevState) => ({ ...prevState, style: { left: 200, top: 100 } }))
      setSize({ full: false, width: '50vw', height: '70vh' })
    } else {
      setDragState((prevState) => ({ ...prevState, style: { left: 0, top: 0 } }))
      setSize({ full: true, width: '100vw', height: '97vh' })
    }
  }

  const focusWindow = () => {
    cb(id, 'focused')
  }

  const getWindowContent = () => {
    switch (title) {
      case 'Resume': return <Resume />;
      case 'Languages & Frameworks': return <Languages />;
      case 'Tools': return <Tools />;
    }
  }

  return (
    <div
      className={windowStyles.windowMain}
      style={{ top: dragState.style.top, left: dragState.style.left, width: size.width, height: size.height, zIndex }}
      onMouseDown={focusWindow}
    >
      <div
        className={windowStyles.windowNav}
        id={'nav'}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseOut={handleMouseUp}
      >
        <div className={windowStyles.windowName}>
          <Image src={icon} alt="windowImg" width={15} height={15} className={windowStyles.windowImg} />
          <p>{title}</p>
        </div>
        <div className={windowStyles.windowButtons}>
          <button onClick={destroyWindow}>-</button>
          <button onClick={resizeWindow}><span>⠀</span></button>
          <button onClick={destroyWindow}>×</button>
        </div>
      </div>
      {getWindowContent()}
    </div>
  )
}

export default Window