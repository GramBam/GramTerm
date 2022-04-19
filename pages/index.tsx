import type { NextPage } from 'next'
import { useEffect } from 'react';
import Desktop from '../components/Desktop/Desktop'

const Home: NextPage = () => {

  useEffect(() => {
    // I mean.. why not?
    const pressed: string[] = [];
    const secretCode: string[] = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

    window.addEventListener('keyup', (e: KeyboardEvent) => {
      pressed.push(e.key);
      pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
      if (pressed.join('').includes(secretCode.join(''))) {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      }
    });
  }, [])

  return (
    <div className='container'>
      <Desktop />
    </div>
  )
}

export default Home
