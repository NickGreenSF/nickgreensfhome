import { AdaptedGrid, ImageHolder, RestrictedImage, Title, StardleLogo, DescText, SiteLink } from '../styles/styledcomponents';
import stardle from '../images/stardle.png';
import stardle2 from '../images/stardle-2.png';

const height: number = window.innerHeight;

export default function StardleScreen(){
    return(
        <AdaptedGrid>
          <ImageHolder>
            <RestrictedImage src={stardle} />
          </ImageHolder>
          <div>
            <Title>
              <StardleLogo>S T A R D L E</StardleLogo>
            </Title>
            <DescText>
              I've always loved movie trivia, so much so that I often find it
              more satisfying to look up facts about a movie than watch the
              movie. When Wordle blew up, I thought the “daily quiz” format
              would blend perfectly with that interest, and out of that thought
              came the idea for STARDLE.
            </DescText>
            <DescText>
              STARDLE is a daily movie trivia game that challenges you to guess
              the name of a movie using only the names of actors in the movie.
              Like Wordle, you get six tries, and each wrong guess reveals more
              information about the solution. Unlike Wordle, the answer is a
              movie title, which means it's not restricted to word length. It's
              challenging, and it's a fun way to spend a couple minutes.
            </DescText>
          </div>
          <div style={{ marginTop: height / 75 }}>
            <DescText>
              I built STARDLE in April 2022 in React Typescript. The build
              process was very engaging. I seized a great opportunity to learn
              more about aesthetics, animations, and game design. Working on a
              project like this also afforded me the opportunity to continue to
              grow more comfortable with Typescript, a language I find very easy
              to use and capable of a lot more than people may give it credit
              for.
            </DescText>
            <DescText>
              I released STARDLE in May 2023, on{' '}
              <SiteLink href="https://stardle.xyz" target="_blank">
                stardle.xyz
              </SiteLink>
              , and if you're curious, head on over and see how you fare against
              my daily onslaught of movie trivia!
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={stardle2} />
          </ImageHolder>
        </AdaptedGrid>
    )
}