import { AdaptedGrid, Title, DescText, Green, ImageHolder, RestrictedImage } from "../styles/styledcomponents";
import thermo from '../images/thermologo.jpg';

export default function StardleScreen(){
    return(
        <AdaptedGrid>
          <div>
            <Title>Thermo Fisher Scientific</Title>
            <DescText>
              
            </DescText>
            <DescText>
              
            </DescText>
            <DescText>
              
            </DescText>
            <DescText>
              
            </DescText>
          </div>
          <ImageHolder>
            <RestrictedImage src={thermo} />
          </ImageHolder>
        </AdaptedGrid>
    )
}