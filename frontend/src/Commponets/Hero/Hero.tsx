import catImage from '../../assets/Property 1=Default.png'
import Vector from '../../assets/Vector.svg'
import st from './Hero.module.scss'

export default function Hero() {
	return (
		<section className={st.root}>
			<div className={st.row}>
				<div className={st.textBlock}>
					<h1>
						WHERE <br />
						CREATIVE <br />
						TEACHING <br />
						<span className={st.highlight}>THRIVES</span>
					</h1>
					<div className={st.buttonContainer}>
						<img src={Vector} alt='' />
						<div className={st.ctaButton}>
							<button className={st.cta}>Sign up</button>
						</div>
					</div>
				</div>

				<div className={st.imageWrapper}>
					<img src={catImage} alt='Cool Cat' />
				</div>
			</div>
		</section>
	)
}
