import st from "./FeaturesPricing.module.scss";
import LiveComputer from "../../assets/computerPricing.png";
import OnlineCourses from "../../assets/cursPricing.png";
import LanguageSchool from "../../assets/IslandPricing.png";
import Checked from "../../assets/checked.svg";
import AdditionalInformation from "../../assets/addInformation.svg";

export default function FeaturesPricing() {
  return (
    <>
      <section className={st.root}>
        <div className={st.container}>
          <div className={st.featuresContent}>
            <div className={st.titleFeatures}>All the features</div>
            <div className={st.featuresCategory}>
              <div className={st.featuresCategoryBig}>Materials</div>
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
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Access the collection of ready-to-use lessons</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Create custom materials in any language</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Over 30 exercise templates</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>AI-Assistant</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Edit free lessons from the catalog</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Share materials with colleagues</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
            </div>

            <div className={st.featuresCategory}>
              <div className={st.featuresCategoryBig}>Learning process</div>
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
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Study on any device</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Work with groups</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Automatic exercise checking</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Highlight-to-translate into 25 languages</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Personal dictionary</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Vocabulary drill</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Voiced-over irregular verbs</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Virtual whiteboard</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Real-time classes</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Videoconferencing</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Chat and animated reactions</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Text and voice exercise comments</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Timer</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Homework module</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Asynchronous learning</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Exercise modules to complement offline classes</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Quizzes and tests</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>
              <div className={st.featuresIndicatorsRow}>
                <div className={st.featuresIndicatorsBig}>
                  <p>Lesson deadlines</p>
                  <img
                    src={AdditionalInformation}
                    alt="Additional Information"
                  />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <div className={st.featuresIndicatorsDash}></div>
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
                <div className={st.featuresIndicatorsMd}>
                  <img src={Checked} alt="Checked" />
                </div>
              </div>

              <div className={st.featuresCategory}>
                <div className={st.featuresCategoryBig}>
                  Management and reporting
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
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Teacher's landing page</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Schedule</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Class statuses and reports</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Grades</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Exercise statistics</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Student leaderboard</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>10 online course access modes</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Homework reminders</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Payments with bonuses</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Control panel + statistics</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Online course curators</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Max number of teachers/curators</p>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <span>1</span>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <span>1</span>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <span>Unlimited</span>
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Max number of students</p>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <span>50</span>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <span>Unlimited</span>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <span>Unlimited</span>
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Access gropus for employees</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Branded platform (White Label)</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Set up lesson packages and prices</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Built-in payment acceptance</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Balance system</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>
                      Automatically deactivate students and pay for active only
                    </p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Incognito mode for QA</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
                <div className={st.featuresIndicatorsRow}>
                  <div className={st.featuresIndicatorsBig}>
                    <p>Student NPS control</p>
                    <img
                      src={AdditionalInformation}
                      alt="Additional Information"
                    />
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <div className={st.featuresIndicatorsDash}></div>
                  </div>
                  <div className={st.featuresIndicatorsMd}>
                    <img src={Checked} alt="Checked" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
