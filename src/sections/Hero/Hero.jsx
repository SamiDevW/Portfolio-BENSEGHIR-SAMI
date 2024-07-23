import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

export default function Hero() {
	const { theme, toggleTheme } = useTheme();
	const themeIcon = theme === "light" ? sun : moon;
	const twitterIcon = theme === "light" ? twitterLight : twitterDark;
	const githubIcon = theme === "light" ? githubLight : githubDark;
	const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
	return (
		<section
			id='hero'
			className={styles.container}
		>
			<div className={styles.colorModeContainer}>
				<img
					className={styles.hero}
					src={heroImg}
					alt='profil picture of Benseghir Sami'
				/>
				<img
					src={themeIcon}
					className={styles.colorMode}
					alt='Color mode icon'
					onClick={toggleTheme}
				/>
			</div>
			<div className={styles.info}>
				<h1>
					BENSEGHIR
					<br />
					Sami
				</h1>
				<h2>
					En recherche d&apos;alternance en
					<br />
					en Developement Web Full-Stack
				</h2>
				<span>
					<a
						href='https://twitter.com'
						target='https://x.com/belkacem_sami'
					>
						<img
							src={twitterIcon}
							alt='Twitter icon'
						/>
					</a>
					<a
						href='https://github.com/SamiDevW'
						target='_blank'
					>
						<img
							src={githubIcon}
							alt='Github icon'
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/belkacem-sami-benseghir-b39664242/'
						target='_blank'
					>
						<img
							src={linkedinIcon}
							alt='Linkedin icon'
						/>
					</a>
				</span>
				<p className={styles.description}>
					Aprés un master en géologie,je me suis découvert une passion pour le
					développment et le numérique.
				</p>
				<a
					href={CV}
					download
				>
					<button className='hover'>MonCV</button>
				</a>
			</div>
		</section>
	);
}
