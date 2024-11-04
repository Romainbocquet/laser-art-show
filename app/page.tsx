
import Video from "./components/Video/Video";
import InfiniteSlider from "./components/InfiniteSlider/InfiniteSlider";
import Accordion from "./components/Accordion/Accordion";
import Valeurs from "./components/Valeurs/Valeurs";
import Chateau from "./components/Chateau/Chateau";
import Intro from "./components/Intro/Intro";

export default function Home() {

  return (
    <div className="pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="relative flex flex-col gap-8 row-start-2 sm:items-start">
        <Video />
        <Intro />
        <Chateau/>
        <Accordion />
        <InfiniteSlider />
        <Valeurs />
      </main>
    </div>
  );
}