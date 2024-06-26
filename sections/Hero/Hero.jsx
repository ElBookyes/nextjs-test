import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
} from "./elements";

export const Hero = ({ image, title, description, ctaText, ...props }) => {
  return (
    <div style={{overflowX: "hidden"}}>
      <StyledContainer {...props}>
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <StyledCTAContainer>
            <StyledGetStartedBtn>{ctaText}</StyledGetStartedBtn>
          </StyledCTAContainer>
        </StyledTextContainer>
        <StyledImageContainer>
          <Image priority layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>
      </StyledContainer>
    </div>
  );
};
