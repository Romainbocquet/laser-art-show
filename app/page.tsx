
import Video from "./components/Video/Video";
import InfiniteSlider from "./components/InfiniteSlider/InfiniteSlider";

export default function Home() {

  return (
    <div className="flex justify-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="relative flex flex-col gap-8 row-start-2 sm:items-start">
        <Video />
        <InfiniteSlider />
      </main>
    </div>
  );
}