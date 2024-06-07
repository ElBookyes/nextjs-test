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
import React from "react";

import {
  AgencySelectionProps,
  AgencyCard,
} from "../../types/AgencySelectionProps";

export const AgencySelection = ({
  image,
  agencyCards,
}: AgencySelectionProps) => {
  return (
    <StyledSection>
      <StyledTitle>Managed agency Selection</StyledTitle>
      <StyledSubTitle>
        Strenghten your onboarding process
      </StyledSubTitle>
      <StyledContentContainer>
        <StyledImageContainer>
          <StyledImage>
            <Image
              layout="responsive"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </StyledImage>
        </StyledImageContainer>
        <StyledCardsContainer>
          {agencyCards.map((card: AgencyCard) => (
            <Card
              key={card.id}
              title={card.title}
              icon={card.icon}
              href={card.href}
              description={card.description}
            />
          ))}
        </StyledCardsContainer>
      </StyledContentContainer>
    </StyledSection>
  );
};
