import { AdaptedGrid, Title, DescText, Green, ImageHolder, RestrictedImage } from "../styles/styledcomponents";
import thermo from '../images/thermologo.jpg';
import office from '../images/thermosite.jpg';

const height: number = window.innerHeight;

export default function StardleScreen(){
    return(
        <AdaptedGrid>
          <div>
            <Title>Thermo Fisher Scientific</Title>
            <DescText>
              Since October of 2022 I have been working in a <Green>Software Engineer II position</Green> at the <Green>Thermo Fisher Scientific</Green> office in <Green>San Jose, CA.</Green> I 
              was initially uneasy about the job, since I had not worked in any similar environment before, but in the months since I've grown more and more comfortable with it.
            </DescText>
            <DescText>
              My team at Thermo is responsible for the creation and management of software that tracks and controls chemical measuring instruments for worldwide consumption.
              To this end, I learned the <Green>Vue</Green> framework on arriving at the position. 
              I additionally have acquired experience in <Green>server installation and maintenace</Green> by updating and maintaining server banks that host this software.
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={thermo} />
          </ImageHolder>
          <ImageHolder>
            <RestrictedImage src={office} />
          </ImageHolder>
          <div style={{ marginTop: height / 75 }}>
            <DescText>
              The skills I've learned at Thermo about concepts such as <Green>code organization</Green> and <Green>professional development</Green> have been invaluable. It's certainly given me a solid intro to the 
              industry in a part of it that's pretty unique and interesting to be a part of.
            </DescText>
            <DescText>
              As I move forward in my career, I hope to take these skills with me and build on them with the people and places I come across in my professional life.
            </DescText>
          </div>
        </AdaptedGrid>
    )
}