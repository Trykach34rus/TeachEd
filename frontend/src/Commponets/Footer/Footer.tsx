import st from "./Footer.module.scss";
import logoBlack from "../../assets/TeachEd-Logo (1).svg";
import bg from "../../assets/background-enhance.png";

export default function Footer() {
  return (
    <>
      <footer className={st.root} style={{ backgroundImage: `url(${bg})` }}>
        <div className={st.container}>
          <div className={st.footerContent}>
            <img src={logoBlack} alt="TeachEd" />
            <nav className={st.footerMenu}>
              <ul className={st.footerListMenu}>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
