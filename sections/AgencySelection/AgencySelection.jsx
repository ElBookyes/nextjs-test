import Image from "next/image";

import {
  StyledSection,
  StyledTitle,
  StyledSubTitle,
  StyledContentContainer,
  StyledImageContainer,
  StyledImage,
  StyledCardsContainer,
} from "./elements";

import { Card } from "../../collections/Card/Card";


export const AgencySelection = ({ image, agencyCards }) => {
  return (
    <StyledSection>
        <StyledTitle>Managed agency Selection</StyledTitle>
        <StyledSubTitle>
          Choose from our selection of top-tier agencies
        </StyledSubTitle>
            <StyledContentContainer>
                <StyledImageContainer>
                  <StyledImage>
                    <Image layout="responsive"
                           src={image.src}
                           alt={image.alt}
                           width={image.width}
                           height={image.height}
                    />
                  </StyledImage>
                </StyledImageContainer>
              <StyledCardsContainer>
                {agencyCards.map((card) => (
                  <Card key={card.id}
                        title={card.title}
                        icon={card.icon}
                        href={card.href}
                        description={card.description}/>
                ))}
              </StyledCardsContainer>
            </StyledContentContainer>
    </StyledSection>
  );
};
