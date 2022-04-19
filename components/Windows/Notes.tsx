import styles from '../../styles/WindowPages.module.css'

function Notes() {
  return (
    <div className={styles.notes}>
      <p className={styles.notesTitle}>TO DO</p>
      <div className={styles.notesList}>
        <p className={styles.note}>-Add working email component</p>
        <p className={styles.note}>-Add functionality to Run start menu button</p>
        <p className={styles.note}>-Add functionality to Shut Down start menu button</p>
      </div>
    </div>
  )
}

export default Notes