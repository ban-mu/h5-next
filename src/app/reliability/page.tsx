import Hero from '../../components/hero';
import homeSrc from '/public/ccp.jpg'

export default function page() {
  return (
    <Hero imgUrl={homeSrc} altTxt='Reliability' content="reliability" />
  )
}