import type { Metadata } from "next";
import Hero from '../../components/hero';
import homeSrc from '/public/bus.png'

export const metadata: Metadata = {
  title: "Performance",
};


export default function page() {
  return (
    <Hero imgUrl={homeSrc} altTxt='Performance' content="performance" />
  )
}
