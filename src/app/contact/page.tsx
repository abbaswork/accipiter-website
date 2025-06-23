import { Hero } from "@/stories/components/hero/Index";
import { HubSpotForm } from "@/stories/components/form/Index";

const HeroArgs = {
  title: "Contact Us to <span>Remodernize</span>\n Your System for the Future",
  subtitle:
    "Please fill in the form below to get in touch with us. We look forward to hearing from you!",
};

export default function Contact() {
  return (
    <>
      <Hero {...HeroArgs} style={{height: "30vh"}} />
       <HubSpotForm/>
    </>
  );
}
