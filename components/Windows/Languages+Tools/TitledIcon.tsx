import toolStyles from '../../../styles/Tools.module.css'
import Image from 'next/image'

interface TitledIconProps {
  title: string
  type: 'languages' | 'tools'
}

function TitledIcon({ title, type }: TitledIconProps) {

  const uppercase = title.charAt(0).toUpperCase() + title.slice(1)

  let dir = '/assets/images/' + type + '/'

  return (
    <div className={toolStyles.icon}>
      <Image src={dir + title + '.png'} alt={uppercase} width={120} height={120} />
      <p className={toolStyles.iconTitle}>{uppercase}</p>
    </div>
  )
}

export default TitledIcon