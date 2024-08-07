import MyHero from "@/src/components/MyHero/Index";
import MyFeatures from "@/src/components/MyFeatures/Index";
import MySkill from "@/src/components/MySkill/Index";
import ScrollToTop from "../components/ScrollToTop/Index";
import MyProject from "@/src/components/MyProject/Index";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <MyHero />
      <MyFeatures />
      <MySkill />
      <MyProject />
    </>
  );
}
