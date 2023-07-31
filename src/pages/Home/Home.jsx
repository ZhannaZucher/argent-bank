import Hero from "../../components/Hero/Hero"
import "./Home.css"
import { features } from "../../data/featuresContent"
import FeatureItem from "../../components/FeatureItem/FeatureItem"

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((f, index) => (
          <FeatureItem key={index} {...f} />
        ))}
      </section>
    </main>
  )
}
