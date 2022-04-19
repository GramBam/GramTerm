import styles from '../../styles/WindowPages.module.css'
import Image from 'next/image'
import React, { useState } from 'react';
import { useForm } from '@formspree/react';

function Mail() {

  const [subject, setSubject] = useState('New Message')
  const [state, handleSubmit] = useForm('contactForm');

  const subjectChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSubject(e.currentTarget.value === '' ? 'New Message' : e.currentTarget.value)
  }

  return (
    <form className={styles.mailForm} onSubmit={handleSubmit} method="POST">
      <div className={styles.mailSend}>
        <button className={styles.mailSendButton} type='submit' disabled={state.submitting || state.succeeded}>
          <Image src='/assets/images/send-mail.png' height={15} width={15} alt='Send' />
          <p>Send</p>
        </button>
      </div>
      <div className={styles.mailContent}>
        <div className={styles.mailDetails}>
          <div className={styles.mailHeader}>
            {subject}
          </div>
          <hr />
          <div className={styles.mailDetail}>
            <p>To:</p>
            <div className={styles.mailReceipient}>Graham Moss</div>
          </div>
          <hr />
          <div className={styles.mailDetail}>
            <p>Subject:</p>
            <input type='text' name='subject' id='subject' onChange={subjectChange} />
          </div>
          <hr />
          <div className={styles.mailDetail}>
            <p>From:</p>
            <input type='text' name='from' id='from' />
          </div>
        </div>
        <textarea id='message' name='message' className={styles.mailMessage} />
      </div>
    </form>
  )
}

export default Mail