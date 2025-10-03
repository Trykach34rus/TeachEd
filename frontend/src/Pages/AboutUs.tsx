import Footer from "../Commponets/Footer/Footer";
import Header from "../Commponets/Heder/Header";
import HeroAbout from "../Commponets/HeroAbout/HeroAbout";
import StepsAbout from "../Commponets/StepsAbout/StepsAbout";
import ContributionAbout from "../Commponets/ContributionAbout/ContributionAbout";
import FutureAbout from "../Commponets/FutureAbout/FutureAbout";
import TalkContact from "../Commponets/TalkContact/TalkContact";
import MainVideos from "../Commponets/MainVideos/MainVideos";
type Props = {};

export default function AboutUs({}: Props) {
  return (
    <div>
      <Header />
      <HeroAbout />
      <StepsAbout />
      <ContributionAbout />
      <FutureAbout />
      <TalkContact />
      <MainVideos />
      <Footer />
    </div>
  );
}
