import Image from 'next/image';
import desktopStyles from '../../styles/Desktop.module.css'

export interface ShortcutProps {
  img: string
  title: string;
}

function Shortcut({ img, title }: ShortcutProps) {

  return (
    <div className={desktopStyles.shortcut}>
      <Image src={img} alt="img" width={35} height={35} />
      <p className={desktopStyles.shortcutTitle}>{title}</p>
    </div>

  )
}

export default Shortcut