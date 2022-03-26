import startmenuStyles from '../../styles/Startmenu.module.css'
import Image from 'next/image'
import sidebar from '../../assets/sidebar.png'
import StartMenuItem from './StartMenuItem';
import linkedIn from '../../assets/linkedin.webp'

function StartMenu() {
  console.log(sidebar);
  return (
    <div className={startmenuStyles.menu}>
      <div className={startmenuStyles.sidebar}>
        <Image src={sidebar} height={150} width={25} alt="sidebar" />
      </div>
      <div className={startmenuStyles.menuList}>
        <StartMenuItem img={linkedIn} title="LinkedIn" />
        <StartMenuItem img={linkedIn} title="LinkedIn" />
        <StartMenuItem img={linkedIn} title="LinkedIn" />
        <StartMenuItem img={linkedIn} title="LinkedIn" />
        <StartMenuItem img={linkedIn} title="LinkedIn" />
      </div>
    </div>
  )
}

export default StartMenu