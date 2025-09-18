import st from "./EnhanceStudents.module.scss";
import EnhanceCard1 from "../../assets/enhance-card.png";
import EnhanceCard2 from "../../assets/enhance-card2.png";
import EnhanceCard3 from "../../assets/enhance-card3.png";
import EnhanceCard4 from "../../assets/enhance-card4.png";
import EnhanceCard5 from "../../assets/enhance-card5.png";
import bg from "../../assets/background-enhance.png";

export default function EnhanceStudents() {
  return (
    <>
      <section className={st.root} style={{ backgroundImage: `url(${bg})` }}>
        <div className={st.container}>
          <div className={st.enhanceTitle}>
            <p>
              Enhance your <span> students’ results</span>
            </p>
          </div>
          <div className={st.enhanceBody}>
            <div className={st.enhanceCard}>
              <img src={EnhanceCard1} alt="students" />
              <h2>Hands-on experience</h2>
              <p>
                Dive into exciting online projects and activities that let you
                apply what you’ve learned in real-world scenarios. Learn through
                engaging videos, movies, and songs that bring subjects to life.
              </p>
            </div>

            <div className={st.enhanceCard}>
              <img src={EnhanceCard2} alt="students" />
              <h2>Interactive learning</h2>
              <p>
                Say goodbye to boring lessons! Enjoy lessons that keep you
                engaged and active, using fun online tools like interactive
                whiteboards, virtual classrooms, live quizzes, and educational
                games.
              </p>
            </div>

            <div className={st.enhanceCard}>
              <img src={EnhanceCard3} alt="students" />
              <h2>Real-Time Feedback</h2>
              <p>
                Know how you’re doing right away! Get instant feedback on your
                assignments and see where you can improve, all through our
                online platform.
              </p>
            </div>

            <div className={st.enhanceCard}>
              <img src={EnhanceCard4} alt="students" />
              <h2>Gamified homework</h2>
              <p>
                Homework has never been this fun! Complete your assignments
                online, earn points, and level up while learning.
              </p>
            </div>

            <div className={st.enhanceCard}>
              <img src={EnhanceCard5} alt="students" />
              <h2>Personalized Learning Paths</h2>
              <p>
                Learn at your own pace and focus on what you need the most. Your
                online lessons will be tailored to your strengths and interests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
