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
					skill='Node'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Express'
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
					skill='Tailwind CSS'
				/>
			</div>
			<hr />
			<div className={styles.skillList}>
				<SkillList
					src={checkMarkIcon}
					skill='WordPress'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Git'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Figma'
				/>
			</div>
		</section>
	);
}

export default Skills;
