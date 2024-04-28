import { AdaptedGrid, Title, DescText, ImageHolder, RestrictedImage, SiteLink } from "../styles/styledcomponents";
import rlbanner from '../images/banner-1.png';
import rluse from '../images/app1-1.png';

const height: number = window.innerHeight;

export default function StardleScreen(){
    return(
        <AdaptedGrid>
          <div>
            <Title>RoutineList</Title>
            <DescText>
              While a student at SFSU, I took a class called Human Computer
              Interaction, during which we had to design a mobile app. After
              making my design, i realized two things, first that the design was
              very achievable, and second, that it would make more sense for me
              to make it as a Chrome extension. RoutineList was born!
            </DescText>
            <DescText>
              RoutineList is a to-do list app. Users can set tasks for
              themselves to a specific time of day and days of the week, and
              those tasks will uncheck themselves on those days of the week at
              those times of day. It ended up being very useful for me at a time
              where I needed a little help self-directing, and it's always great
              to get utility out of your own work.
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={rlbanner} />
          </ImageHolder>
          <ImageHolder>
            <RestrictedImage src={rluse} />
          </ImageHolder>
          <div style={{ marginTop: height / 75 }}>
            <DescText>
              At a time where I was still getting my legs under me as a
              developer, I found the design process for RoutineList to be very
              satisfying, building it in standard HTML/CSS/JS and taking
              advantage of tools like Chrome's user storage. It was finished by
              May 2021, in time to present it for the final project of the
              class. I'd love to flesh out the design more in the future, and
              I'm comfortable with where it is for now.
            </DescText>
            <DescText>
              If, like me, you're feeling a little disorganized, you can check
              out the extension for yourself{' '}
              <SiteLink
                href="https://chrome.google.com/webstore/detail/routinelist/eckihielkdkafbhekdgpbjlloiddjdpd?hl=en"
                target="_blank"
              >
                here
              </SiteLink>
              .
            </DescText>
          </div>
        </AdaptedGrid>
    )
}