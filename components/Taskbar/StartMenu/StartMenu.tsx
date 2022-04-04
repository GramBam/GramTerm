import startmenuStyles from '../../../styles/Startmenu.module.css'
import StartMenuItem from './StartMenuItem';
import Image from 'next/image'

export interface StartMenuProps {
  show: boolean
}

function StartMenu({ show }: StartMenuProps) {
  const dir = '/assets/images/'

  return (
    <>
      {show &&
        <div className={startmenuStyles.menu}>
          <div className={startmenuStyles.sidebar}>
            {show && <Image src={dir + 'sidebar.png'} height={150} width={25} alt="sidebar" />}
          </div>
          <div className={startmenuStyles.menuList}>
            <StartMenuItem img={dir + 'linkedin.webp'} title="LinkedIn" url='https://www.linkedin.com/in/graham-moss/' />
            <StartMenuItem img={dir + 'github.webp'} title="GitHub" url='https://github.com/GramBam/' />
            <StartMenuItem img={dir + 'shortcuts/resume.png'} title="Resume" url='/assets/pdfs/myResume.pdf' />
            <StartMenuItem img={dir + 'github.webp'} title="GitHub" url='https://github.com/GramBam/' />
            <StartMenuItem img={dir + 'linkedin.webp'} title="LinkedIn" url='https://www.linkedin.com/in/graham-moss/' />
          </div>
        </div>

      }
    </>

  )
}

export default StartMenu