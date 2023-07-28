import Hero from "../../components/Hero/Hero"
import "./Home.css"
import iconChat from "../../assets/icon-chat.png"
import iconMoney from "../../assets/icon-money.png"
import iconSecurity from "../../assets/icon-security.png"
import FeatureItem from "../../components/FeatureItem/FeatureItem"

const features = [
  {
    icon: iconChat,
    alt: "Chat Icon",
    title: "You are our #1 priority",
    content:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: iconMoney,
    alt: "Money Icon",
    title: "More savings means higher rates",
    content:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: iconSecurity,
    alt: "Security Icon",
    title: "Security you can trust",
    content:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
]

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((f, index) => (
          <FeatureItem
            key={index}
            icon={f.icon}
            alt={f.alt}
            title={f.title}
            content={f.content}
          />
        ))}
      </section>
    </main>
  )
}
