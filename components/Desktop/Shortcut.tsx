import Image, { ImageProps } from 'next/image';
import desktopStyles from '../../styles/Desktop.module.css'

interface ShortcutProps {
  img: StaticImageData
  title: string;
}

function Shortcut({ img, title }: ShortcutProps) {
  return (
    <div className={desktopStyles.shortcut}>
      <Image src={img.src} alt="img" width={35} height={35} />
      <p className={desktopStyles.shortcutTitle}>{title}</p>
    </div>
  )
}

export default Shortcut