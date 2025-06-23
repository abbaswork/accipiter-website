import { Hero } from "@/stories/components/hero/Index";
import { ReactiveCard } from "@/stories/components/cards/interactive-card/Index";
import { VerticalStepList } from "@/stories/components/vertical-step-list/Index";
import { CardRow } from "@/stories/components/cards/card/Index";
import { Carousel } from "@/stories/components/cards/review-card/Index";
import {
  HeroArgs,
  ourApproachArgs,
  ourTestimonialsArgs,
  ourUseCasesArgs,
  ourCaseStudiesArgs,
} from "@/app/const/home";

export default function Home() {
  return (
    <>
      <Hero {...HeroArgs} />
      <ReactiveCard {...ourUseCasesArgs} />
      <VerticalStepList {...ourApproachArgs} style={{ paddingTop: "0rem" }} />
      <Carousel {...ourTestimonialsArgs} />
      <CardRow {...ourCaseStudiesArgs} />
    </>
  );
}
