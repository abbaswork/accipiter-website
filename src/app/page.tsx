import styles from "./page.module.scss";
import { Hero } from "@/stories/components/hero/Index";
import { HeroStory } from "@/stories/components/hero/Index.stories";
import { ReactiveCard } from "@/stories/components/cards/interactive-card/Index";
import { InteractiveCardStory } from "@/stories/components/cards/interactive-card/Index.stories";
import { VerticalStepList } from "@/stories/components/vertical-step-list/Index";
import { VerticalStepListStory } from "@/stories/components/vertical-step-list/Index.stories";
import { CardRow } from "@/stories/components/cards/card/Index";
import { Primary as CardRowArgs } from "@/stories/components/cards/card/card.stories";
import { Carousel } from "@/stories/components/cards/review-card/Index";
import { Primary as CarouselArgs } from "@/stories/components/cards/review-card/Index.stories";

export default function Home() {
  return (
    <>
      <Hero {...HeroStory.args} />
      <VerticalStepList {...VerticalStepListStory.args} />
      <Carousel {...CarouselArgs.args} />
      <ReactiveCard {...InteractiveCardStory.args} />
      <CardRow {...CardRowArgs.args} />
    </>
  );
}
