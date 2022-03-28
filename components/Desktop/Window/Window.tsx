import windowStyles from '../../../styles/Window.module.css'
import Image from 'next/image';
import { ShortcutProps } from '../Shortcut';
import { useState, MouseEvent } from 'react';

function Window({ img, title }: ShortcutProps) {

  const [dragState, setDragState] = useState({
    dragging: false,
    diffX: 0,
    diffY: 0,
    style: {
      top: 100,
      left: 100,
    }
  })

  const handleMouseDown = (e: MouseEvent) => {
    setDragState((prevState) => ({
      diffX: e.clientX - (e.target as HTMLElement).getBoundingClientRect().left,
      diffY: e.clientY - (e.target as HTMLElement).getBoundingClientRect().top,
      dragging: true,
      style: prevState.style
    }))
  }

  const handleMouseMove = (e: MouseEvent) => {
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

  const checkBounds = (bounds: DOMRect): { left: number, top: number } => {
    let left: number = bounds.left
    let top: number = bounds.top
    console.log('before', left, top, bounds);

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

    console.log('after', left, top);


    return { left, top }
  }

  return (
    <div className={windowStyles.windowMain} style={{ ...dragState.style }}>
      <div className={windowStyles.windowNav} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp} onMouseOut={handleMouseUp}>
        <div className={windowStyles.windowName}>
          <Image src={img.src} alt="windowImg" width={15} height={15} className={windowStyles.windowImg} />
          <p>{title}</p>
        </div>
        <div className={windowStyles.windowButtons}>
          <button>-</button>
          <button><span>⠀</span></button>
          <button>×</button>
        </div>
      </div>
    </div>
  )
}

export default Window