import catImage from '../../assets/Property 1=Default.png'
import st from './Hero.module.scss'

export default function Hero() {
	return (
		<>
			<section className={st.root}>
				<div className={st.textBlock}>
					<h1>
						WHERE <br />
						CREATIVE <br />
						TEACHING <br />
						<span className={st.highlight}>THRIVES</span>
					</h1>
					<button className={st.cta}>Sign up</button>
				</div>

				<div className={st.imageWrapper}>
					<img src={catImage} alt='Cool Cat' />
				</div>
			</section>
		</>
	)
}
