import st from "./HeroContact.module.scss";


import CatBeige from "../../assets/ContactCatBeige.png";
import CatGinger from "../../assets/ContactCatGinger.png";
import CatWhite from "../../assets/ContactCatWhite.png";
import CatMain from "../../assets/ContactMainCat.png";

export default function HeroContact() {
  return (
    <section className={st.root}>
      <div className={st.container}>
        <div className={st.mainContent}>
          <div className={st.mainCatImage}>
            <img src={CatMain} alt="Main cat" />
          </div>
          <div className={st.textContact}>
            <h1 className={st.titleContact}>Contact us!</h1>
            <p>
              Have any ideas, questions, or suggestions? Feel free to write to
              us!
            </p>
          </div>
        </div>
        <div className={st.cardsContact}>
          <div className={st.cardContact}>
            <img src={CatBeige} alt="cat sales" />
            <h2>Sales</h2>
            <p>If you have questions about plans or features</p>
            <button className={st.buttonContact}>
              <span>GET IN TOUCH</span>
            </button>
          </div>
          <div className={st.cardContact}>
            <img src={CatWhite} alt="cat support" />
            <h2>Support</h2>
            <p>If you have not found the answer to your question in our blog</p>
            <button className={st.buttonContact}>
              <span>GET IN TOUCH</span>
            </button>
          </div>
          <div className={st.cardContact}>
            <img src={CatGinger} alt="cat cooperation" />
            <h2>Cooperation</h2>
            <p>
              If you need information about our company or have any other
              questions
            </p>
            <button className={st.buttonContact}>
              <span>GET IN TOUCH</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
