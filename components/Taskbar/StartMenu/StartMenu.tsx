import startmenuStyles from '../../../styles/Startmenu.module.css'
import StartMenuItem from './StartMenuItem';
import Image from 'next/image'
import sidebar from '../../../assets/sidebar.png'
import linkedIn from '../../../assets/linkedin.webp'
import github from '../../../assets/github.webp'

export interface StartMenuProps {
  show: boolean
}

function StartMenu({ show }: StartMenuProps) {

  return (
    <>
      {show &&
        <div className={startmenuStyles.menu}>
          <div className={startmenuStyles.sidebar}>
            {show && <Image src={sidebar} height={150} width={25} alt="sidebar" />}
          </div>
          <div className={startmenuStyles.menuList}>
            <StartMenuItem img={linkedIn} title="LinkedIn" url='https://www.linkedin.com/in/graham-moss/' />
            <StartMenuItem img={github} title="GitHub" url='https://github.com/GramBam/' />
            <StartMenuItem img={linkedIn} title="LinkedIn" url='https://www.linkedin.com/in/graham-moss/' />
            <StartMenuItem img={github} title="GitHub" url='https://github.com/GramBam/' />
            <StartMenuItem img={linkedIn} title="LinkedIn" url='https://www.linkedin.com/in/graham-moss/' />
          </div>
        </div>

      }
    </>

  )
}

export default StartMenu