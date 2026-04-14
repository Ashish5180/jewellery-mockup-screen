import { HeroSection } from "@/components/Hero";
import JewellerySection from "@/components/JwelleryCollection";
import { NewCollections } from "@/components/NewCollections";
import { VideoCollections } from "@/components/VideoCollections";
import SignatureExperience from "@/components/SignatureExperience";
import CuratedJourney from "@/components/CuratedJourney";
import Shades from "@/components/Shades";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewCollections />
      <VideoCollections />
      <Shades />
      <JewellerySection />
      <SignatureExperience />
      <CuratedJourney />
      <Footer />
    </main>
  );
}
