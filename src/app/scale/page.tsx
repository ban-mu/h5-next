import Hero from '../../components/hero';
import homeSrc from '/public/4.jpg'

export default function page() {
  return (
    <Hero imgUrl={homeSrc} altTxt='Scale' content="scale" />
  )
}