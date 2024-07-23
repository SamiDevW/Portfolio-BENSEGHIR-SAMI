import styles from "../Skills/SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
function Skills() {
	return (
		<section
			id='skills'
			className={styles.container}
		>
			<h1 className='sectionTitle'>Skills</h1>
			<div className={styles.skillList}>
				<SkillList
					src={checkMarkIcon}
					skill='CSS'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Javascript'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Typescript'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Node'
				/>
			</div>
			<hr />
			<div className={styles.skillList}>
				<SkillList
					src={checkMarkIcon}
					skill='React'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Angular'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Tailwind CSS'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Php'
				/>
			</div>
			<hr />
			<div className={styles.skillList}>
				<SkillList
					src={checkMarkIcon}
					skill='React'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Git'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Figma'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='WordPress'
				/>
			</div>
		</section>
	);
}

export default Skills;