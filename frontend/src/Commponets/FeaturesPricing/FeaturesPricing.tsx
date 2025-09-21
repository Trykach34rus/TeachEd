import st from "./FeaturesPricing.module.scss";
import LiveComputer from "../../assets/computerPricing.png";
import OnlineCourses from "../../assets/cursPricing.png";
import LanguageSchool from "../../assets/IslandPricing.png";
import Checked from "../../assets/checked.svg";
import AdditionalInformation from "../../assets/addInformation.svg";
import {
  learning,
  management,
  materials,
} from "../../utils/featuresPricingData";

export default function FeaturesPricing() {
  return (
    <>
      <section className={st.root}>
        <div className={st.container}>
          <div className={st.featuresContent}>
            <div className={st.titleFeatures}>All the features</div>
            <div className={st.featuresCategory}>
              <div className={st.featuresCategoryBig}>
                <p>Materials </p>
              </div>
              <div className={st.featuresCategoryMd}>
                <div className={st.featuresCategoryMdHead}>
                  <img src={LiveComputer} alt="livecomputer" />
                  <p>Live classes</p>
                </div>
              </div>
              <div className={st.featuresCategoryMd}>
                <div className={st.featuresCategoryMdHead}>
                  <img src={OnlineCourses} alt="onlineCourses" />
                  <p>Online courses</p>{" "}
                </div>
              </div>
              <div className={st.featuresCategoryMd}>
                <div className={st.featuresCategoryMdHead}>
                  <img src={LanguageSchool} alt="LanguageSchool" />
                  <p>Language school</p>
                </div>
              </div>
            </div>

            <div className={st.featuresIndicators}>
              {materials.map((item, index) => (
                <div className={st.featuresIndicatorsRow} key={index}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>{item.name}</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    {item.classes ? (
                      <img src={Checked} alt="Checked" />
                    ) : (
                      <div className={st.featuresIndicatorsDash}></div>
                    )}
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    {item.courses ? (
                      <img src={Checked} alt="Checked" />
                    ) : (
                      <div className={st.featuresIndicatorsDash}></div>
                    )}
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    {item.school ? (
                      <img src={Checked} alt="Checked" />
                    ) : (
                      <div className={st.featuresIndicatorsDash}></div>
                    )}
                  </div>
                </div>
              ))}

              <div className={st.featuresCategory}>
                <div className={st.featuresCategoryBig}>
                  <p>Learning process</p>
                </div>
                <div className={st.featuresCategoryMd}>
                  <p>Live classes</p>
                </div>
                <div className={st.featuresCategoryMd}>
                  <p>Online courses</p>
                </div>
                <div className={st.featuresCategoryMd}>
                  <p>Language school</p>
                </div>
              </div>

              <div className={st.featuresIndicators}>
                {learning.map((item, index) => (
                  <div className={st.featuresIndicatorsRow} key={index}>
                    <div className={st.featuresIndicatorsBig}>
                      <p>{item.name}</p>
                      <img
                        src={AdditionalInformation}
                        alt="Additional Information"
                      />
                    </div>
                    <div className={st.featuresIndicatorsMd}>
                      {item.classes ? (
                        <img src={Checked} alt="Checked" />
                      ) : (
                        <div className={st.featuresIndicatorsDash}></div>
                      )}
                    </div>
                    <div className={st.featuresIndicatorsMd}>
                      {item.courses ? (
                        <img src={Checked} alt="Checked" />
                      ) : (
                        <div className={st.featuresIndicatorsDash}></div>
                      )}
                    </div>
                    <div className={st.featuresIndicatorsMd}>
                      {item.school ? (
                        <img src={Checked} alt="Checked" />
                      ) : (
                        <div className={st.featuresIndicatorsDash}></div>
                      )}
                    </div>
                  </div>
                ))}

                <div className={st.featuresCategory}>
                  <div className={st.featuresCategoryBig}>
                    <p> Management and reporting </p>
                  </div>
                  <div className={st.featuresCategoryMd}>
                    <p>Live classes</p>
                  </div>
                  <div className={st.featuresCategoryMd}>
                    <p>Online courses</p>
                  </div>
                  <div className={st.featuresCategoryMd}>
                    <p>Language school</p>
                  </div>
                </div>

                <div className={st.featuresIndicators}>
                  {management.map((item, index) => (
                    <div className={st.featuresIndicatorsRow} key={index}>
                      <div className={st.featuresIndicatorsBig}>
                        <p>{item.name}</p>
                        <img
                          src={AdditionalInformation}
                          alt="Additional Information"
                        />
                      </div>
                      <div className={st.featuresIndicatorsMd}>
                        {item.classes ? (
                          <img src={Checked} alt="Checked" />
                        ) : (
                          <div className={st.featuresIndicatorsDash}></div>
                        )}
                      </div>
                      <div className={st.featuresIndicatorsMd}>
                        {item.courses ? (
                          <img src={Checked} alt="Checked" />
                        ) : (
                          <div className={st.featuresIndicatorsDash}></div>
                        )}
                      </div>
                      <div className={st.featuresIndicatorsMd}>
                        {item.school ? (
                          <img src={Checked} alt="Checked" />
                        ) : (
                          <div className={st.featuresIndicatorsDash}></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
