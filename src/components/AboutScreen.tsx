import { AdaptedGrid, ImageHolder, RestrictedImage, Title, DescText, Green } from "../styles/styledcomponents";
import me from '../images/me.jpg';

export default function StardleScreen(){
    return(
        <AdaptedGrid>
          <ImageHolder>
            <RestrictedImage src={me} />
          </ImageHolder>
          <div>
            <Title>About Me</Title>
            <DescText>
              I started coding in high school and was immediately drawn to it. I
              liked watching myself get better at it - it struck me as a skill
              worth learning, and worth making into a trade. After graduating
              from San Francisco State in February 2022, majoring in computer
              science, I began my journey into the world of professional software work.
            </DescText>
            <DescText>
              What I like about coding and development is the many problems it
              presents through the same overall lens; various coding projects
              and problems I have worked on have felt like anything from math
              homework to making a short film, and I appreciate how much
              diversity the field can bring out.
            </DescText>
            <DescText>
              I work mostly in <Green>Python</Green> and{' '}
              <Green>Typescript,</Green> and have experience in many other tools
              and languages, such as <Green>Java,</Green> <Green>C,</Green>{' '}
              <Green>C++,</Green> <Green>MySQL,</Green> <Green>Sass,</Green> and{' '}
              <Green>Docker.</Green>
            </DescText>
            <DescText>
              I ambitiously look forward to my time spent as a
              professional software developer and the many challenges it will
              bring. Thanks for reading!
            </DescText>
          </div>
        </AdaptedGrid>
    )
}