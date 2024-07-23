import styles from "./ContactStyle.module.css";

function Contact() {
	return (
		<section
			id='contact'
			className={styles.container}
		>
			<h1 className='sectionTitle'>contact</h1>
			<form
				action='https://formspree.io/f/mnnajdyn'
				method='post'
			>
				<div className='formGroup'>
					<label
						htmlFor='name'
						hidden
					>
						Name
					</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='name'
						required
					/>
				</div>
				<div className='formGroup'>
					<label
						htmlFor='email'
						hidden
					>
						Email
					</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
						required
					/>
				</div>
				<div className='formGroup'>
					<label
						htmlFor='message'
						hidden
					>
						Message
					</label>
					<textarea
						type='message'
						name='message'
						id='message'
						placeholder='Message'
						required
					></textarea>
				</div>

				<input
					className='hover btn'
					type='submit'
					value='Submit'
				/>
			</form>
		</section>
	);
}

export default Contact;
