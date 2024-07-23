import styles from "./ProjectsStyles.module.css";
import todo from "../../assets/todo.jpeg";
import outdoor from "../../assets/outdoor.jpeg";
import cvreact from "../../assets/cv-react.jpeg";
import castle from "../../assets/castle.jpeg";

import ProjectCard from "../../common/ProjectCard";
function Projects() {
	return (
		<section
			id='projects'
			className={styles.container}
		>
			<h1 className='sectionTitle'>Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={todo}
					link='https://samidevw.github.io/todo/'
					h3='Todolist'
					p='A Todolist with todos stored in local storage'
				/>
				<ProjectCard
					src={outdoor}
					link='https://samidevw.github.io/OutdoorProject/'
					h3='Outdoor Website'
					p='A reproduction of a Wordpress site'
				/>
				<ProjectCard
					src={cvreact}
					link='https://cv-react-iota.vercel.app'
					h3='Curriculum Vitae'
					p='Full stack CV made with React and Node'
				/>
				<ProjectCard
					src={castle}
					link='https://samidevw.github.io/DungeonGame/'
					h3='Dungeon Game'
					p='A reproduction of a Dungeon Game'
				/>
			</div>
		</section>
	);
}

export default Projects;
