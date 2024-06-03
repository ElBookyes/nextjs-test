// The Card to be exported goes here
import React from "react";
import Image from "next/image";
import { CardContainer, CardTitle, CardParagraph } from "./elements";

import { CardProps } from "../../types/CardProps";


export const Card = ({ title, icon, href, description }: CardProps) => {
  return (
    <CardContainer href={href} target="_blank">
        <Image src={icon} alt={title} width={50} height={50} />
        <article>
          <CardTitle>{title}</CardTitle>
            <CardParagraph>
              {description.split("*").map((text, index) => (
                <React.Fragment key={index}>
                  {index % 2 === 1 ? <strong>{text}</strong> : text}
                </React.Fragment>
              ))}
            </CardParagraph>
        </article>
    </CardContainer>
  );
};
