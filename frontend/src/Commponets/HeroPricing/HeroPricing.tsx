import PricingCat from "../../assets/PricingMainCat.png";
import st from "./HeroPricing.module.scss";

export default function HeroPricing() {
  return (
    <>
      <section className={st.root}>
        <div className={st.container}>
          <div className={st.pricingCat}>
            <img src={PricingCat} alt="pricing Cat" />
          </div>
          <h1 className={st.titlePricing}>
            <span>Build educational products </span>
            <br />
            on a versatile platform
          </h1>
        </div>
      </section>
    </>
  );
}
