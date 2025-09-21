import st from "./HeroAbout.module.scss";

export default function HeroAbout() {
  return (
    <>
      <section className={st.root}>
        <div className={st.MainContent}>
          <div className={st.MainInfo}>
            <h1 className={st.MainTitle}>Creative Teaching starts here</h1>
            <div className={st.MainText}>
              <h3 className={st.MainH3}>The origins of the idea</h3>
              <p className={st.MainParagraph}>
                TeachEd was born as a response to the need for quality online
                learning for teachers and students at a time when traditional
                education methods have undergone significant changes due to
                global crises. The main goal was to create a platform that would
                provide teachers with tools for interactive, effective and
                innovative learning using the latest technologies.
              </p>
            </div>
          </div>
          <img className={st.MainImg} src="" alt="" />
        </div>
      </section>
    </>
  );
}
