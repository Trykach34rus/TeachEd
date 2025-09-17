import Header from "../Heder/Header";
import st from "./HeroPricing.module.scss";
import PricingCat from "../../assets/PricingMainCat.png";

export default function HeroPricing() {
  return (
    <>
      <section className={st.root}>
        <Header />
        <div className={st.row}></div>

        <div className={st.container}>
          <div className={st.pricingCat}>
            <img src={PricingCat} alt="pricing Cat" />
          </div>
          <h1 className={st.titlePricing}>
            <span>Build educational products </span>
            on a versatile platform
          </h1>
        </div>
      </section>
    </>
  );
}
