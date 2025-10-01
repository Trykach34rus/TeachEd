import st from "./StepsAbout.module.scss";
import FounderPic from "../../assets/FounderPic.png";
import FirstStepsAboutIcon from "../../assets/FirstStepsAboutIcon.svg";
import { StepsItem } from "../../utils/type";

export default function StepsAbout() {
  const stepsObj: StepsItem[] = [
    {
      id: "01",
      title: ".From idea to realization",
      text: "The first versions of the platform were tested on small groups of teachers to get feedback and improve the functionality. Several pilot projects were organized, which demonstrated the high efficiency of using interactive technologies in teaching. Kristina actively participated in the development of content and implementation of new features, drawing on her experience in coordination of EdTech projects.",
    },

    {
      id: "02",
      title: ".Development and growth",
      text: "Thanks to positive feedback and support from the technology and education community and expanded to 22 countries around the world, TeachEd grew rapidly. The platform began offering a variety of courses and trainings for teachers, integrating new technologies and innovative teaching methods. Kristina has collaborated with renowned EdTech experts to develop and implement best practices in education. She also participated in international conferences and hackathons to share her experience and knowledge.",
    },

    {
      id: "03",
      title: ".Impact and achievements",
      text: "Today, TeachEd is a leading platform in the field of educational technology, helping teachers around the world improve their professional skills and implement the latest teaching methods. The platform continues to expand its functionality by adding new courses, tools, and resources that meet the current needs of modern education.",
    },
  ];

  return (
    <>
      <section className={st.root}>
        <div className={st.firstSteps}>
          <div className={st.firstStepsInfo}>
            <h2 className={st.firstStepsTitle}>First steps</h2>
            <img
              src={FirstStepsAboutIcon}
              alt="arrow icon"
              className={st.firstStepsImg}
            />
          </div>
          <div className={st.firstStepsCard}>
            <div className={st.cardFounder}>
              <img
                className={st.founderPic}
                src={FounderPic}
                alt="Founder picture"
              />
              <div className={st.cardFounderInfo}>
                <h6 className={st.cardFounderTitle}>Kristina Novik</h6>
                <span className={st.cardFounderDescription}>
                  the founder of TeachEd
                </span>
              </div>
            </div>
            <p className={st.cardFounderText}>
              With years of experience in educational technology and artificial
              intelligence in education, realized that teachers needed more than
              just resources to teach. <br />
              <br /> Her vision was to create a platform that would support
              teachers in all aspects of their work, from lesson planning to
              professional development. Kristina has a Master's degree from
              world top 2% universities- University of Manchester.
            </p>
          </div>
        </div>
        <div className={st.steps}>
          {stepsObj.map((steps) => (
            <div key={steps.id} className={st.step}>
              <h3 className={st.stepsTitle}>
                {steps.id}
                {steps.title}
              </h3>
              <p className={st.stepsText}>{steps.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
