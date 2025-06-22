import styles from "./page.module.scss";
import { Hero } from "@/stories/components/hero/Index";
import { HeroStory } from "@/stories/components/hero/Index.stories";
import { ReactiveCard } from "@/stories/components/cards/interactive-card/Index";
import { InteractiveCardStory } from "@/stories/components/cards/interactive-card/Index.stories";
import { VerticalStepList } from "@/stories/components/vertical-step-list/Index";
import { VerticalStepListStory } from "@/stories/components/vertical-step-list/Index.stories";


export default function Home() {
  return (
    <>
      <Hero {...HeroStory.args} />
      <ReactiveCard  {...InteractiveCardStory.args} />
      <VerticalStepList {...VerticalStepListStory.args} />
    </>
  );
}
