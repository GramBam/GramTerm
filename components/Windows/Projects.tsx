import Image from 'next/image';
import styles from '../../styles/WindowPages.module.css'

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.project}>
        <p className={styles.projectTitle}>Language Cards</p>
        <Image src='/assets/images/lc.png' layout='fill' objectFit='contain' alt='Language Cards' />
        <p>A simple app to help me learn Mandarin!</p>
      </div>
      <div className={styles.project}>
        <p className={styles.projectTitle}>Language Cards2</p>
        <div>
          <Image src='/assets/images/lc.png' layout='fill' objectFit='contain' alt='Language Cards' />
        </div>
      </div>
    </div>

  )
}

export default Projects