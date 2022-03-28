import desktopStyles from '../../../styles/Desktop.module.css'
import Image from 'next/image';
import { ShortcutProps } from '../Shortcut';

function Window({ img, title }: ShortcutProps) {
  return (
    <div className={desktopStyles.windowMain}>
      <div className={desktopStyles.windowNav}>
        <div className={desktopStyles.windowName}>
          <Image src={img.src} alt="img" width={15} height={15} className={desktopStyles.windowImg} />
          <p>{title}</p>
        </div>
        <div className={desktopStyles.windowButtons}>
          <button>-</button>
          <button><span>⠀</span></button>
          <button>×</button>
        </div>
      </div>
    </div>
  )
}

export default Window