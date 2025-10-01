import Checked from '../../assets/checked.svg'
import LiveComputer from '../../assets/computerPricing.png'
import OnlineCourses from '../../assets/cursPricing.png'
import LanguageSchool from '../../assets/IslandPricing.png'
import st from './ProductsCard.module.scss'
// import bgProduct from "../../assets/bg-products.png";

export default function ProductsCard() {
	return (
		<>
			<section className={st.root}>
				<div className={st.container}>
					<div className={st.productsContent}>
						<div className={st.productsCard}>
							<div className={st.productsCardHead}>
								<img src={LiveComputer} alt='live classes' />
								<h2>Live classes</h2>
								<p>Conduct interactive lessons in real time</p>
							</div>
							<div className={st.productsCardInfo}>
								<div className={st.productsCardPrice}>
									<h1>from $3</h1>
									<p>/student per month</p>
								</div>
								<div className={st.productsCardButtons}>
									<button className={st.productsButtonStudents}>
										<span>Free for students</span>
									</button>
									<button className={st.productsButtonOut}>
										<span>TRY OUT</span>
									</button>
									<button className={st.productsButtonFree}>
										<span>7-day free trial</span>
									</button>
								</div>
							</div>
							<div className={st.productsCardFeatures}>
								<h3>Main features:</h3>
								<div className={st.productsFeatures}>
									<div className={st.productsFeaturesItem}>
										<img src={Checked} alt='Checked' />
										<p>Video conferencing</p>
									</div>
									<div className={st.productsFeaturesItem}>
										<img src={Checked} alt='Checked' />
										<p>Individual and group classes</p>
									</div>
									<div className={st.productsFeaturesItem}>
										<img src={Checked} alt='Checked' />
										<p>Real-time operation</p>
									</div>
								</div>
							</div>
						</div>

						<div className={st.productsCard}>
							<div className={st.productsCardHead}>
								<img src={OnlineCourses} alt='Online Courses' />
								<h2>Online courses</h2>
								<p>Conduct interactive lessons in real time</p>
							</div>
							<div className={st.productsCardInfo}>
								<div className={st.productsCardPrice}>
									<h1>from $2</h1>
									<p>/student
										per year</p>
								</div>
								<div className={st.productsCardButtons}>
									<button className={st.productsButtonStudents}>
										<span>Free for students</span>
									</button>
									<button className={st.productsButtonOut}>
										<span>TRY OUT</span>
									</button>
									<button className={st.productsButtonFree}>
										<span>1st student free</span>
									</button>
								</div>
							</div>
							<div className={st.productsCardFeatures}>
								<h3>Main features:</h3>
								<div className={st.productsFeatures}>
									<div className={st.productsFeaturesItem}>
										<img src={Checked} alt='Checked' />
										<p>Learning automation</p>
									</div>
									<div className={st.productsFeaturesItem}>
										<img src={Checked} alt='Checked' />
										<p>Student reports</p>
									</div>
									<div className={st.productsFeaturesItem}>
										<img src={Checked} alt='Checked' />
										<p>Text and voice feedback for each answer</p>
									</div>
								</div>
							</div>
						</div>

						<div className={st.productsCard}>
							<div className={st.productsCardHead}>
								<img src={LanguageSchool} alt='Language School' />
								<h2>Language school</h2>
								<p>Run an educational business</p>
							</div>
							<div className={st.productsCardInfo}>
								<div className={st.productsCardPrice}>
									<h1>from $12</h1>
									<p>/per month</p>
								</div>
								<div className={st.productsCardButtons}>
									<button className={st.productsButtonStudents}>
										<span>Free for students</span>
									</button>
									<button className={st.productsButtonOut}>
										<span>TRY OUT</span>
									</button>
									<button className={st.productsButtonFree}>
										<span>3-day free trial</span>
									</button>
								</div>
							</div>
							<div className={st.productsCardFeatures}>
								<h3>Main features:</h3>
								<div className={st.productsFeatures}>
									<div className={st.productsFeaturesItem}>
										<img src={Checked} alt='Checked' />
										<p>Manage all business processes</p>
									</div>
									<div className={st.productsFeaturesItem}>
										<img src={Checked} alt='Checked' />
										<p>Full White Label</p>
									</div>
									<div className={st.productsFeaturesItem}>
										<img src={Checked} alt='Checked' />
										<p>Accept payments from students</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
