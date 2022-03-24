import type { NextPage } from 'next'
import Taskbar from '../components/Taskbar/Taskbar'
const Home: NextPage = () => {
  return (
    <div className='container'>
      <Taskbar />
    </div>
  )
}

export default Home
