import Image from 'next/image'
import lnfStyles from '../styles/LnFPage.module.css'

function LnF() {

  const data = ['html', 'css', 'javascript', 'typescript', 'react', 'next', 'node', 'express', 'ruby', 'rails', 'pixi', 'angularJS']

  return (
    <div className={lnfStyles.icons}>
      {
        [...Array(data.length)].map((_, i) => (
          <LnFIcon title={data[i]} key={i} />
        ))
      }
    </div>
  )
}

export default LnF


function LnFIcon({ title }: any) {

  const uppercase = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <div className={lnfStyles.icon}>
      <Image src={'/assets/images/' + title + '.png'} alt={uppercase} width={120} height={120} />
      <p className={lnfStyles.iconTitle}>{uppercase}</p>
    </div>
  )
}
