import Image from 'next/image'
import { MyComputerData } from '../../data/MyComputerData'
import styles from '../../styles/WindowPages.module.css'

function MyComputer() {

  return (
    <div className={styles.appsContainer}>
      <div className={styles.computerApps}>
        {
          MyComputerData.map((data, i) => { return <MyComputerIcon title={data.title} img={data.img} key={i} /> })
        }
      </div>
    </div>

  )
}

export default MyComputer

interface MyComputerIconProps {
  title: string;
  img: string;
}

function MyComputerIcon({ title, img }: MyComputerIconProps) {
  const size = 85

  if (title === 'BrickBreaker') {
    return (
      <a className={styles.compApp} href="https://gmoss.ca/Epileptic-Brickbreaker/" target='_blank' rel='noreferrer'>
        <Image src={img} height={size} width={size} alt={title} />
        <p>{title}</p>
      </a>
    )
  } else {
    return (
      <div className={styles.compApp}>
        <Image src={img} height={size} width={size} alt={title} />
        <p>{title}</p>
      </div>
    )
  }
}
