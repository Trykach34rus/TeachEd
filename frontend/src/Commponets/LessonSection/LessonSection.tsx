import Box from '../../assets/Box.png'
import LesonImageBlueColor from '../../assets/LesonImageBlue-color.png'
import MagikStick from '../../assets/Magik-stick.png'
import Rectangle from '../../assets/Rectangle.png'
import st from './LessonSection.module.scss'

export default function LessonSection() {
	return (
		<section className={st.root}>
			<div className={st.container}>
				<h2 className={st.title}>
					CREATE YOUR <span>UNIQUE LESSONS</span>
				</h2>

				<div className={st.leftNote}>
					WORK LESS, <br /> TEACH MORE
				</div>

				<div className={st.rightNote}>
					<img src={MagikStick} alt='Void' />
					USE AI MAGIC!
				</div>

				<div className={st.centerBlock}>
					<img
						src={LesonImageBlueColor}
						alt='Blue paint background'
						className={st.paintImage}
					/>
					<div className={st.tabletPlaceholder}>
						<img src={Rectangle} alt='Tablet' className={st.tabletImage} />
					</div>
				</div>
			</div>
			<button className={st.bottomNote}>
				<img src={Box} alt='Box' /> ALL IN ONE
			</button>
		</section>
	)
}
