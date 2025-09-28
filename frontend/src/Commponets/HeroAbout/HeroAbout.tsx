import st from "./HeroAbout.module.scss";
import mainImageAbout from "../../assets/mainImageAbout.png";

export default function HeroAbout() {
  return (
    <>
      <section className={st.root}>
        <div className={st.mainContent}>
          <div className={st.mainInfo}>
            <h1 className={st.mainTitle}>Creative Teaching starts here</h1>
            <div className={st.mainText}>
              <h5 className={st.mainSubtitle}>The origins of the idea</h5>
              <p className={st.mainParagraph}>
                TeachEd was born as a response to the need for quality online
                learning for teachers and students at a time when traditional
                education methods have undergone significant changes due to
                global crises. The main goal was to create a platform that would
                provide teachers with tools for interactive, effective and
                innovative learning using the latest technologies.
              </p>
            </div>
          </div>
          <img
            className={st.mainImg}
            src={mainImageAbout}
            alt="Creative Teaching"
          />
        </div>
      </section>
    </>
  );
}
