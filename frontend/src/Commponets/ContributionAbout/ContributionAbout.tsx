import st from "./ContributionAbout.module.scss";
import ContributionImg1 from "../../assets/personalImage1.svg";
import ContributionImg2 from "../../assets/personalImage2.svg";

export default function ContributionAbout() {
  return (
    <>
      <section className={st.root}>
        <div className={st.personalContribution}>
          <div className={st.personalContributionInfo}>
            <h2 className={st.personalContributionTitle}>
              Personal contribution of the founder
            </h2>
            <p className={st.personalContributionText}>
              Kristina Novik, the founder of TeachEd, is an international judge
              for tech startups and an expert in educational technology. She
              actively introduces new technologies and methodologies into the
              educational process, making it more accessible and effective. Her
              contribution to the development of TeachEd Kristina has been
              renowned worldwide as an innovator in EdTech field
            </p>
          </div>
          <div className={st.personalContributionImages}>
            <img
              src={ContributionImg1}
              alt="Founder Image"
              className={st.personalContributionImage}
            />
            <img
              src={ContributionImg2}
              alt="Founder Image"
              className={st.personalContributionImage}
            />
          </div>
        </div>
      </section>
    </>
  );
}
