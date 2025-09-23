import CatBackground from "../../assets/cat-background.png";
import st from "./HeroBlog.module.scss";
//

export default function HeroBlog() {
  return (
    <>
      <section className={st.root}>
        <div
          className={st.row}
          style={{ backgroundImage: `url(${CatBackground})` }}
        >
          <div className={st.content}>
            <div className={st.badge}>★ Featured</div>

            <h1 className={st.title}>
              AI and you: how AI is changing online education
            </h1>

            <p className={st.description}>
              AI is revolutionizing online education by personalizing learning
              experiences, automating administrative tasks, and providing
              real-time feedback. It’s enabling adaptive learning platforms that
              tailor content to individual needs, making education more
              accessible and efficient.
            </p>
          </div>
        </div>
        <div className={st.blogPostContent}>
          <p>RECENT BLOG POST</p>
        </div>
      </section>
    </>
  );
}
