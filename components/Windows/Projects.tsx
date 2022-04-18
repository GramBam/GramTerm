import Image from 'next/image';
import { ProjectData, projects } from '../../data/ProjectData';
import styles from '../../styles/WindowPages.module.css'

function Projects() {

  const myProjects = projects.map((p, i) => {
    return <Project img={p.img} title={p.title} info={p.info} link={p.link} stack={p.stack} github={p.github} key={i} />
  })

  return (
    <div className={styles.projectsContainer}>
      {myProjects}
    </div>
  )
}

export default Projects

function Project({ img, title, info, link, stack, github }: ProjectData) {

  return (
    <div>
      <div className={styles.project}>
        <a href={link} target='_blank' rel='noreferrer' className={styles.projectTitle}>{title}</a>
        <p className={styles.projectInfo}>{info}</p>
        <a href={link} target='_blank' rel='noreferrer'>
          <img src={img} alt={title} className={styles.projectImage} />
        </a>
        <div className={styles.projectBottom}>
          <p className={styles.projectStack}>Stack: {stack}</p>
          <a href={github}>Check the Code!</a>
        </div>
      </div>
    </div>
  )
}