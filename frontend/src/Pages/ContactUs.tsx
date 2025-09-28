import Header from "../Commponets/Heder/Header.tsx";
import HeroContact from "../Commponets/HeroContact/HeroContact.tsx"
import TalkContact from "../Commponets/TalkContact/TalkContact.tsx"
import Footer from "../Commponets/Footer/Footer.tsx";


type Props = {}

export default function ContactUs({}: Props) {
    return (
        <div>
            <Header/>
            <HeroContact/>
            <TalkContact/>
            <Footer/>
        </div>
    )
}
