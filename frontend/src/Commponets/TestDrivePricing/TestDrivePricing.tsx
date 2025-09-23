import DriveCat from '../../assets/driveCatPricing.png'
import st from './TestDrivePricing.module.scss'
// import BgDriveCat from "../../assets/bg-drive.png";

export default function TestDrivePricing() {
	const text = '7 days free trial'
	return (
		<>
			<section className={st.root}>
				<div className={st.container}>
					<div className={st.driveContent}>
						<img src={DriveCat} alt='drivecat' />
						<div className={st.driveContainer}>
							<div className={st.driveTitle}>
								Test-drive the platform<br />of the future today!
							</div>
							<button className={st.driveButton}>
								<span>TRY FOR FREE</span>
							</button>
						</div>
						<div className={st.driveLinear}>
							<div className={st.driveTrack}>
								{[...Array(20)].map((_, i) => (
									<p key={i}>{text}</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
