import type { NextPage } from 'next'
import Desktop from '../components/Desktop/Desktop'
import Taskbar from '../components/Taskbar/Taskbar'
const Home: NextPage = () => {
  return (
    <div className='container'>
      <Desktop />
    </div>
  )
}

export default Home
