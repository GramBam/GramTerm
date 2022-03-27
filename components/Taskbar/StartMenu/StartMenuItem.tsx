import startmenuStyles from '../../../styles/Startmenu.module.css'
import Image from 'next/image'

interface MenuItemProps {
  img: StaticImageData
  title: string;
  url: string
}

function StartMenuItem({ img, title, url }: MenuItemProps) {
  let firstChar = title[0]
  let theRest = title.substring(1)

  return (
    <a className={startmenuStyles.menuItem} href={url} target="_blank" rel="noopener noreferrer">
      <Image className={startmenuStyles.menuItemImg} src={img} alt={title} width={30} height={30} />
      <p className={startmenuStyles.menuItemTitleStart}>{firstChar}</p>
      <p className={startmenuStyles.menuItemTitle}>{theRest}</p>
    </a>
  )
}

export default StartMenuItem