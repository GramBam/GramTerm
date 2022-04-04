import toolStyles from '../../../styles/WindowPages.module.css'
import Image from 'next/image'

interface TitledIconProps {
  title: string
  type: 'languages' | 'tools'
}

function TitledIcon({ title, type }: TitledIconProps) {

  let formatted: string

  switch (title) {
    case 'css': formatted = 'CSS'; break;
    case 'html': formatted = 'HTML'; break;
    case 'vscode': formatted = 'VSCode'; break;
    case 'pixi': formatted = 'PIXI'; break;

    default: formatted = title.charAt(0).toUpperCase() + title.slice(1); break;
  }

  let dir = '/assets/images/' + type + '/'

  return (
    <div className={toolStyles.icon}>
      <Image src={dir + title + '.png'} alt={formatted} width={120} height={120} />
      <p className={toolStyles.iconTitle}>{formatted}</p>
    </div>
  )
}

export default TitledIcon