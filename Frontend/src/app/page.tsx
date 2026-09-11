import LandingCtaBand from "@/features/landing/LandingCtaBand";
import LandingFocusPanel from "@/features/landing/LandingFocusPanel";
import LandingHero from "@/features/landing/LandingHero";
import LandingIntroSections from "@/features/landing/LandingIntroSections";
import LandingOurWork from "@/features/landing/LandingOurWork";
import LandingWhatWeDo from "@/features/landing/LandingWhatWeDo";

export default function Home() {
  return (
    <>
      <LandingHero />
      <LandingIntroSections />
      <LandingWhatWeDo />
      <LandingFocusPanel />
      <LandingCtaBand />
      <LandingOurWork />
    </>
  );
}
