// The Card to be exported goes here
import React from "react";
import Image from "next/image";
import { CardContainer, CardTitle, CardParagraph } from "./elements";

import { CardProps } from "../../types/CardProps";

export const Card = ({
  title = "Default Title",
  icon = "/default-icon.png",
  href = "#",
  description = "No description available",
}: CardProps) => {
  return (
    <CardContainer
      aria-label={`Link to ${title}`}
      href={href}
      rel="external"
      target="_blank"
    >
      <Image src={icon} alt={`${title} icon`} width={50} height={50} />
      <article>
        <CardTitle>{title}</CardTitle>
        <CardParagraph>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </CardParagraph>
      </article>
    </CardContainer>
  );
};
