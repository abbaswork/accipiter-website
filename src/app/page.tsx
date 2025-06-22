import styles from "./page.module.scss";
import { Hero } from "@/stories/components/hero/Index";
import { HeroStory } from "@/stories/components/hero/Index.stories";


export default function Home() {
  return (
    <>
      <Hero {...HeroStory.args} />
    </>
  );
}
