import toolStyles from '../../../styles/Tools.module.css'
import TitledIcon from './TitledIcon'

function Tools() {

  const data = ['git', 'wordpress', 'vscode', 'photoshop', 'netlify', 'ubuntu']

  return (
    <div className={toolStyles.icons}>
      {
        [...Array(data.length)].map((_, i) => (
          <TitledIcon title={data[i]} key={i} type="tools" />
        ))
      }
    </div>
  )
}

export default Tools