import styles from "./ProjectsStyles.module.css";
import outdoor from "../../assets/outdoor.jpeg";
import cvreact from "../../assets/cv-react.jpeg";
import castle from "../../assets/castle.jpeg";
import generic from "../../assets/generic.jpeg";

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
					src={generic}
					link='https://samidevw.github.io/todolist/'
					h3='Todolist'
					p='A Todolist with drag and drop features'
				/>
				<ProjectCard
					src={outdoor}
					link='https://samidevw.github.io/OutdoorProject/'
					h3='Outdoor Website'
					p='A reproduction of a Wordpress site'
				/>
				<ProjectCard
					src={cvreact}
					link='https://cv-react-front.vercel.app/'
					h3='Curriculum Vitae'
					p='Full stack CV made with React and Express(Basic Auth and updatable data)'
				/>
				<ProjectCard
					src={castle}
					link='https://samidevw.github.io/DungeonGame/'
					h3='Dungeon Game'
					p='A reproduction of a Dungeon Game'
				/>
				<ProjectCard
					src={generic}
					link='https://samidevw.github.io/guessGame/'
					h3='Guess game'
					p='A basic guess game with a touch of horror'
				/>
				<ProjectCard
					src={generic}
					link='https://samidevw.github.io/fizzBuzz/'
					h3='FizzBuzz'
					p='One of the classics in every coding language'
				/>
				<ProjectCard
					src={generic}
					link='https://github.com/SamiDevW/basicCrudProject'
					h3='Basic CRUD API'
					p='A CRUD project made on example users dataset'
				/>
			</div>
		</section>
	);
}

export default Projects;
