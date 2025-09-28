import st from "./TalkContact.module.scss";


import CatTalk from "../../assets/ContactCatSing.png";
import Facebook from "../../assets/ContactFacebook.svg"
import Instagram from "../../assets/ContactInstagram.svg"
import Telegram from "../../assets/ContactTelegram.svg"

export default function TalkContact() {
    return (
        <section className={st.root}>
            <div className={st.container}>
                <div className={st.talkContent}>
                    <div className={st.talkValide}>
                        <h1 className={st.titleTalk}>
                            —Let’s talk
                        </h1>
                        <p>TeachEd is an open community of like-minded people, our mission is to make learning easy and
                            accessible, we are always open to comments and suggestions. Write us your ideas!</p>
                        <div className={st.talkForm}>
                            <input className={st.talkName} type="text" placeholder="Your Name"/>
                            <input className={st.talkEmail} type="text" placeholder="Your Email"/>
                            <input className={st.talkMessage} type="text" placeholder="Your Message"/>
                            <button className={st.buttonTalk}>
                                <span>SEND</span>
                            </button>
                        </div>
                    </div>
                    <div className={st.infoTalk}>
                        <div className={st.talkImage}>
                            <img src={CatTalk} alt="cat contact"/>
                        </div>
                        <div className={st.contactTalk}>
                            <div className={st.contactTalkText}>
                                <p>Email</p>
                                <h2>example@teached.com</h2>
                            </div>
                            <div className={st.contactTalkText}>
                                <p>Phone number</p>
                                <h2>+1 (203) 314-9564</h2>
                            </div>
                            <div className={st.contactTalkText}>
                                <p>Social media</p>
                                <div className={st.talkNetwork}>
                                    <img src={Facebook} alt="Facebook"/>
                                    <img src={Instagram} alt="Instagram"/>
                                    <img src={Telegram} alt="Telegram"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
