import type { HeroProps } from "./Hero.types"

const Hero = ({name,title,description,buttonText}:HeroProps) => {
  return (
    <section>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{buttonText}</button>
    </section>
  )
}

export default Hero