import CatBackground from "../../assets/cat-background.png";
import st from "./HeroBlog.module.scss";
import { blogPosts } from "./blogData";

export default function HeroBlog() {
  return (
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
            tailor content to individual needs, making education more accessible
            and efficient.
          </p>
        </div>
      </div>
      <div className={st.blogPostContent}>
        <p className={st.blogTitle}>RECENT BLOG POST</p>

        <div className={st.grid}>
          {blogPosts.map((post) => (
            <div key={post.id} className={st.card}>
              <img src={post.image} alt={post.title} className={st.cardImage} />

              <div className={st.cardContent}>
                <span className={st.category}>{post.category}</span>
                <h3 className={st.cardTitle}>{post.title}</h3>
                <p className={st.cardDescription}>{post.description}</p>

                <div className={st.footer}>
                  <div className={st.author}>
                    <span className={st.avatar}>K</span>
                    <div>
                      <p className={st.name}>{post.author}</p>
                      <p className={st.date}>{post.date}</p>
                    </div>
                  </div>
                  <a href="#" className={st.readMore}>
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
