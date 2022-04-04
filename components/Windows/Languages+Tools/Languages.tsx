import toolStyles from '../../../styles/WindowPages.module.css'
import TitledIcon from './TitledIcon'

function Languages() {

  const data = ['html', 'css', 'javascript', 'typescript', 'react', 'next', 'node', 'express', 'ruby', 'rails', 'pixi', 'angularJS']

  return (
    <div className={toolStyles.icons}>
      {
        [...Array(data.length)].map((_, i) => (
          <TitledIcon title={data[i]} key={i} type="languages" />
        ))
      }
    </div>
  )
}

export default Languages



