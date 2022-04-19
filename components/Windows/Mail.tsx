import styles from '../../styles/WindowPages.module.css'
import Image from 'next/image'
import React from 'react';

function Mail() {

  const sendMail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <form className={styles.mailForm}>
      <div className={styles.mailSend}>
        <button className={styles.mailSendButton} onClick={sendMail}>
          <Image src='/assets/images/send-mail.png' height={15} width={15} alt='Send' />
          <p>Send</p>
        </button>
      </div>
      <div className={styles.mailContent}>
        <div className={styles.mailDetails}>
          <div className={styles.mailHeader}>
            Subject
          </div>
          <hr />
          <div className={styles.mailSubject}>
            <p>To:</p>
            <div className={styles.mailReceipient}>Graham Moss</div>
          </div>
          <hr />
          <div className={styles.mailSubject}>
            <p>Subject:</p>
            <input />
          </div>
          <hr />
          <div className={styles.mailSubject}>
            <p>From:</p>
            <input />
          </div>
        </div>
        <textarea className={styles.mailText} />
      </div>
    </form>
  )
}

export default Mail