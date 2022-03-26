import startmenuStyles from '../../../styles/Startmenu.module.css'
import { ShortcutProps } from '../../Desktop/Shortcut'
import Image from 'next/image'

function StartMenuItem({ img, title }: ShortcutProps) {
  let firstChar = title[0]
  let theRest = title.substring(1)

  return (
    <div className={startmenuStyles.menuItem}>
      <Image className={startmenuStyles.menuItemImg} src={img} alt={title} width={30} height={30} />
      <p className={startmenuStyles.menuItemTitleStart}>{firstChar}</p>
      <p className={startmenuStyles.menuItemTitle}>{theRest}</p>
    </div>
  )
}

export default StartMenuItem