import st from "./FutureAbout.module.scss";
import FutureImg from "../../assets/futureImage.svg";

export default function FutureAbout() {
  return (
    <>
      <section className={st.root}>
        <div className={st.future}>
          <img src={FutureImg} alt="Founder Image" className={st.futureImage} />
          <div className={st.futureInfo}>
            <h2 className={st.futureTitle}>Future plans</h2>
            <p className={st.futureText}>
              The TeachEd platform continues to evolve, introducing new tools
              and resources for teachers. Kristina Novik and her team are
              actively working to expand the platform's functionality to make
              learning even more interactive and personalized. They strive to
              make TeachEd the main tool for teachers around the world,
              supporting them in their professional development and improving
              their teaching effectiveness. Kristina is planning to expand the
              outreach of the platform on the USA and Canada
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
