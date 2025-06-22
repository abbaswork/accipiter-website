import styles from "./page.module.scss";
import { Hero } from "@/stories/components/hero/Index";
import { HeroStory } from "@/stories/components/hero/Index.stories";
import { ReactiveCard } from "@/stories/components/cards/interactive-card/Index";
import { InteractiveCardStory } from "@/stories/components/cards/interactive-card/Index.stories";


export default function Home() {
  return (
    <>
      <Hero {...HeroStory.args} />
      <ReactiveCard  {...InteractiveCardStory.args} />
    </>
  );
}
