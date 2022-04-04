import Image from 'next/image'
import styles from '../../styles/WindowPages.module.css'

function MyComputer() {

  const size = 85

  return (
    <div className={styles.appsContainer}>
      <div className={styles.computerApps}>
        <div className={styles.compApp}>
          <Image src='/assets/images/icons/civ.png' height={size} width={size} />
          <p>Civilization</p>
        </div>
        <div className={styles.compApp}>
          <Image src='/assets/images/icons/CounterStrike.png' height={size} width={size} />
          <p>Counter-Strike</p>
        </div>
        <div className={styles.compApp}>
          <Image src='/assets/images/icons/doom.png' height={size} width={size} />
          <p>DOOM</p>
        </div>
        <div className={styles.compApp}>
          <Image src='/assets/images/icons/microsoftgolf.png' height={size} width={size} />
          <p>Microsoft Golf</p>
        </div>
        <div className={styles.compApp}>
          <Image src='/assets/images/icons/MicrosoftOffice.png' height={size} width={size} />
          <p>Microsoft Office</p>
        </div>
        <div className={styles.compApp}>
          <Image src='/assets/images/icons/NeedForSpeed.png' height={size} width={size} />
          <p>Need for Speed</p>
        </div>
        <div className={styles.compApp}>
          <Image src='/assets/images/icons/solitaire.png' height={size} width={size} />
          <p>Solitaire</p>
        </div>
        <div className={styles.compApp}>
          <Image src='/assets/images/icons/StarCraft.png' height={size} width={size} />
          <p>StarCraft</p>
        </div>
      </div>
    </div>

  )
}

export default MyComputer